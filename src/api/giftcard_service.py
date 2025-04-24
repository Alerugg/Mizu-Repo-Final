# src/api/giftcard_service.py
import os, json
from uuid import uuid4
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import stripe

from api.models import db, GiftCard, Service

stripe.api_key = os.getenv("STRIPE_SECRET")
DOMAIN         = os.getenv("FRONTEND_DOMAIN", "https://mizu.mx")

def create_checkout(giver, receiver, service_id):
    service = Service.query.get(service_id)
    gc = GiftCard(
        giver_email=giver,
        receiver_email=receiver,
        service_id=service.id,
        amount=service.cost,
        unique_code=uuid4().hex[:8].upper()
    )
    db.session.add(gc); db.session.commit()

    session = stripe.checkout.Session.create(
        mode            = "payment",
        success_url     = f"{DOMAIN}/gift-card/success?gc={gc.id}",
        cancel_url      = f"{DOMAIN}/gift-card/cancel",
        metadata        = {"gift_card_id": gc.id},
        line_items=[{
            "quantity": 1,
            "price_data": {
                "currency": "eur",
                "unit_amount": int(service.cost*100),
                "product_data": {"name": f"Mizu Gift Card – {service.title}"}
            }
        }]
    )
    return gc, session.url

def mark_paid_and_send(gc_id):
    gc = GiftCard.query.get(gc_id)
    if not gc: return
    gc.is_paid = True; db.session.commit()

    # e‑mail con SendGrid
    html = f"""
      <h1>Tu regalo Mizu</h1>
      <p>Código: <strong>{gc.unique_code}</strong></p>
      <p>Valor: €{gc.amount:.2f}</p>
      <p>Reserva cuando quieras en mizu.mx</p>
    """
    message = Mail(
        from_email="reservas@mizu.mx",
        to_emails  = [gc.giver_email, gc.receiver_email or gc.giver_email],
        subject    = "Tu Gift‑Card Mizu",
        html_content = html
    )
    SendGridAPIClient(os.getenv("SENDGRID_KEY")).send(message)
