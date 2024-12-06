from flask import jsonify, url_for
from datetime import datetime
from api.models import db
import smtplib
from email.mime.text import MIMEText

class APIException(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

def update_all_services_status():
    """Actualiza el estado de todos los servicios según las fechas de inicio y fin."""
    current_time = datetime.utcnow()
    services = Service.query.all()
    for service in services:
        if service.start_date <= current_time <= service.end_date:
            service.status = 'active'
        elif current_time > service.end_date:
            service.status = 'closed'
        else:
            service.status = 'draft'
    db.session.commit()

def send_reset_email(user, reset_token):
    # URL para restablecer la contraseña
    reset_url = f"http://yourfrontend.com/reset-password/{reset_token}"

    # Configuración del correo electrónico
    sender_email = "noreply@mizu.com"
    recipient_email = user.email
    subject = "Instrucciones para restablecer la contraseña"
    body = f"Hola {user.name},\n\nHaz clic en el siguiente enlace para restablecer tu contraseña:\n\n{reset_url}\n\nSi no solicitaste un restablecimiento de contraseña, ignora este correo electrónico."

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = recipient_email

    try:
        with smtplib.SMTP("smtp.your-email-provider.com", 587) as server:
            server.starttls()
            server.login("your-email@example.com", "your-email-password")
            server.sendmail(sender_email, recipient_email, msg.as_string())
    except Exception as e:
        print(f"Error al enviar el correo electrónico: {e}")

def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)

def generate_sitemap(app):
    unique_endpoints = set()
    for rule in app.url_map.iter_rules():
        if has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            if url != "/" and "/admin/" not in url:
                unique_endpoints.add(url)

    links_html = "".join(["<li style='padding: 10px 0 5px 0;'><a style='text-decoration: none; color: black; text-transform: uppercase;' href='" + y +
                         "' onmouseover='this.style.color=\"darkred\"' onmouseout='this.style.color=\"black\"' onclick='this.style.color=\"blue\"'>" + y + '</a></li>' for y in unique_endpoints])
    api_name = "Mizu Spa API"
    additional_data_html = """
        <h2 style="margin: 20px 0px 10px 0px; font-size:40px;">ENDPOINTS REQUESTS GUIDE</h2>
        <div style="text-align: left; padding: 40px; margin: 20px 100px; background-color: #333; border-radius: 10px; color: white;">
            <p><strong>CREATE USER:</strong></p>
            <p><strong>method: POST</strong></p>
            <p><strong>path request:</strong> /users</p>
            <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; overflow: auto; color: black;">
                    {
                        "name": "new user",
                        "email": "newuser@example.com",
                        "phone": "123456789"
                    }
            </pre>
        </div>
    """
    return f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{api_name} API</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Montserrat&family=Pixelify+Sans&display=swap" rel="stylesheet">
        </head>
        <body style="background-color: white; color: black; text-align: center; font-family: 'Montserrat', arial;">
        <div style="text-align: center;">
        <div style="position: fixed; bottom: 0; right: 0; margin: 40px;">
                <button style="font-family: 'Barlow', sans-serif; border-radius: 40px;background-color: grey; padding: 20px; box-shadow: 0px 0px 10px 0px white; transition: all 0.3s ease;"
                    onmouseover="this.style.backgroundColor='black'; this.style.boxShadow='0px 0px 20px 0px white';"
                    onmouseout="this.style.backgroundColor='grey'; this.style.boxShadow='0px 0px 10px 0px white';">
                    <a style="text-decoration: none; font-size: 20px; color: white;" href="/admin">ADMIN MODE</a>
                </button>
         </div>
        <h1>Welcome to {api_name} API</h1>
          <img style="max-height : 400px; margin: 0px 0px 50px 0px;" src="https://greatbrook.com/wp-content/uploads/2015/05/data-analysis-charts.png" />
         <p style="font-size:25px">API HOST <script>document.write('<input style="padding: 10px; margin-left: 20px; width: 300px" type="text" value="'+window.location.href+'" />');</script></p>
        <h2 style="margin: 50px 0px 10px 0px; font-size:60px;">ENDPOINTS</h2>
        <div>
        <ul style="text-align: center; font-size: 25px; list-style-type: none; padding-right:30px; margin-bottom: 150px;">{links_html}</ul>
        {additional_data_html}
        </div>
        </body>
        </html>
        """
