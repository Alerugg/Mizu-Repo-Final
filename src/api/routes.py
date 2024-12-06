from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Service, GiftCard, UserTransaction, Promotion
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# UserTransaction Endpoints
@api.route('/users', methods=['POST'])
def create_user():
    """
    Create a new user from payment form data.
    """
    body = request.get_json()
    if not body:
        return jsonify({"msg": "Missing data"}), 400
    
    new_user = UserTransaction(
        name=body.get('name'),
        email=body.get('email'),
        phone=body.get('phone'),
        transaction_number=body.get('transaction_number'),
        service_id=body.get('service_id')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

@api.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """
    Get a user by ID.
    """
    user = UserTransaction.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404
    return jsonify(user.serialize()), 200

@api.route('/users', methods=['GET'])
def get_all_users():
    """
    Get all users.
    """
    users = UserTransaction.query.all()
    return jsonify([user.serialize() for user in users]), 200

# Service Endpoints
@api.route('/services', methods=['GET'])
def get_all_services():
    """
    Get all services.
    """
    services = Service.query.all()
    return jsonify([service.serialize() for service in services]), 200

@api.route('/services/<string:service_type>', methods=['GET'])
def get_services_by_type(service_type):
    """
    Get services by type (individual or duo).
    """
    services = Service.query.filter_by(service_type=service_type).all()
    return jsonify([service.serialize() for service in services]), 200

@api.route('/services', methods=['POST'])
def create_service():
    """
    Create a new service.
    """
    body = request.get_json()
    new_service = Service(
        title=body.get('title'),
        subtitle=body.get('subtitle'),
        description=body.get('description'),
        allergens=body.get('allergens'),
        products=body.get('products'),
        cost=body.get('cost'),
        service_type=body.get('service_type')
    )
    db.session.add(new_service)
    db.session.commit()
    return jsonify(new_service.serialize()), 201

@api.route('/services/<int:service_id>', methods=['PUT'])
def update_service(service_id):
    """
    Update a service by ID.
    """
    body = request.get_json()
    service = Service.query.get(service_id)
    if not service:
        return jsonify({"msg": "Service not found"}), 404

    service.title = body.get('title', service.title)
    service.subtitle = body.get('subtitle', service.subtitle)
    service.description = body.get('description', service.description)
    service.allergens = body.get('allergens', service.allergens)
    service.products = body.get('products', service.products)
    service.cost = body.get('cost', service.cost)
    service.service_type = body.get('service_type', service.service_type)
    db.session.commit()
    return jsonify(service.serialize()), 200

@api.route('/services/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    """
    Delete a service by ID.
    """
    service = Service.query.get(service_id)
    if not service:
        return jsonify({"msg": "Service not found"}), 404

    db.session.delete(service)
    db.session.commit()
    return jsonify({"msg": "Service deleted"}), 200

# Transaction Endpoints
@api.route('/transactions', methods=['POST'])
def create_transaction():
    """
    Create a transaction and link it to a user and service.
    """
    body = request.get_json()
    user_name = body.get('name')
    email = body.get('email')
    phone = body.get('phone')
    service_id = body.get('service_id')

    service = Service.query.get(service_id)
    if not service:
        return jsonify({"msg": "Service not found"}), 404

    new_transaction = UserTransaction(
        name=user_name,
        email=email,
        phone=phone,
        transaction_number=body.get('transaction_number'),
        service_id=service.id
    )
    db.session.add(new_transaction)
    db.session.commit()
    return jsonify(new_transaction.serialize()), 201

@api.route('/transactions', methods=['GET'])
def get_all_transactions():
    """
    Get all transactions.
    """
    transactions = UserTransaction.query.all()
    return jsonify([transaction.serialize() for transaction in transactions]), 200

@api.route('/transactions/<int:transaction_id>', methods=['GET'])
def get_transaction(transaction_id):
    """
    Get a transaction by ID.
    """
    transaction = UserTransaction.query.get(transaction_id)
    if not transaction:
        return jsonify({"msg": "Transaction not found"}), 404
    return jsonify(transaction.serialize()), 200

# Gift Card Endpoints
@api.route('/gift-cards', methods=['POST'])
def create_gift_card():
    """
    Create a new gift card and link it to a sender and recipient.
    """
    body = request.get_json()
    giver_email = body.get('giver_email')
    receiver_email = body.get('receiver_email')
    service_id = body.get('service_id')
    
    service = Service.query.get(service_id)
    if not service:
        return jsonify({"msg": "Service not found"}), 404

    new_gift_card = GiftCard(
        giver_email=giver_email,
        receiver_email=receiver_email,
        service_id=service.id,
        transaction_number=body.get('transaction_number')
    )
    db.session.add(new_gift_card)
    db.session.commit()
    return jsonify(new_gift_card.serialize()), 201

@api.route('/gift-cards', methods=['GET'])
def get_all_gift_cards():
    """
    Get all gift cards.
    """
    gift_cards = GiftCard.query.all()
    return jsonify([gift_card.serialize() for gift_card in gift_cards]), 200

@api.route('/gift-cards/<int:gift_card_id>', methods=['GET'])
def get_gift_card(gift_card_id):
    """
    Get a gift card by ID.
    """
    gift_card = GiftCard.query.get(gift_card_id)
    if not gift_card:
        return jsonify({"msg": "Gift card not found"}), 404
    return jsonify(gift_card.serialize()), 200

@api.route('/gift-cards/<int:gift_card_id>', methods=['PUT'])
def update_gift_card(gift_card_id):
    """
    Update a gift card by ID.
    """
    body = request.get_json()
    gift_card = GiftCard.query.get(gift_card_id)
    if not gift_card:
        return jsonify({"msg": "Gift card not found"}), 404

    gift_card.receiver_email = body.get('receiver_email', gift_card.receiver_email)
    gift_card.service_id = body.get('service_id', gift_card.service_id)
    db.session.commit()
    return jsonify(gift_card.serialize()), 200

@api.route('/gift-cards/<int:gift_card_id>', methods=['DELETE'])
def delete_gift_card(gift_card_id):
    """
    Delete a gift card by ID.
    """
    gift_card = GiftCard.query.get(gift_card_id)
    if not gift_card:
        return jsonify({"msg": "Gift card not found"}), 404

    db.session.delete(gift_card)
    db.session.commit()
    return jsonify({"msg": "Gift card deleted"}), 200
