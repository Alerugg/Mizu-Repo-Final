from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Tabla para transacciones de usuarios temporales
class UserTransaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    transaction_number = db.Column(db.String(80), nullable=False, unique=True)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)

    def __repr__(self):
        return f'<UserTransaction {self.transaction_number}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "transaction_number": self.transaction_number,
            "service_id": self.service_id
        }

# Tabla de Servicios Generales
class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    subtitle = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    allergens = db.Column(db.Text, nullable=True)  # Opcional
    products = db.Column(db.Text, nullable=False)  # Listado de productos incluidos
    cost = db.Column(db.Float, nullable=False)
    service_type = db.Column(db.String(50), nullable=False)  # 'individual' o 'duo'
    booking_url = db.Column(db.String(255), nullable=True)  # Nueva columna para URLs de reserva
    transactions = db.relationship('UserTransaction', backref='service', lazy=True)

    def __repr__(self):
        return f'<Service {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "subtitle": self.subtitle,
            "description": self.description,
            "allergens": self.allergens,
            "products": self.products,
            "cost": self.cost,
            "service_type": self.service_type,
            "booking_url": self.booking_url  # Incluye la URL en la serialización
        }

# Tabla de Promociones
class Promotion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text, nullable=False)
    discount = db.Column(db.Float, nullable=False)  # Descuento en porcentaje o monto fijo
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=True)  # Puede ser NULL si aplica a todos los servicios

    def __repr__(self):
        return f'<Promotion {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "discount": self.discount,
            "start_date": self.start_date.isoformat(),
            "end_date": self.end_date.isoformat(),
            "service_id": self.service_id
        }

# Tabla de Gift Cards
class GiftCard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    giver_email = db.Column(db.String(120), nullable=False)
    receiver_email = db.Column(db.String(120), nullable=True)  # Opcional, puede ser NULL
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
    transaction_number = db.Column(db.String(80), nullable=False, unique=True)
    is_redeemed = db.Column(db.Boolean, default=False, nullable=False)

    def __repr__(self):
        return f'<GiftCard {self.transaction_number}>'

    def serialize(self):
        return {
            "id": self.id,
            "giver_email": self.giver_email,
            "receiver_email": self.receiver_email,
            "service_id": self.service_id,
            "transaction_number": self.transaction_number,
            "is_redeemed": self.is_redeemed
        }

# Tabla de Estadísticas Mensuales
class MonthlyStatistics(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    month = db.Column(db.String(2), nullable=False)  # '01' - '12'
    year = db.Column(db.String(4), nullable=False)
    total_revenue = db.Column(db.Float, nullable=False)
    individual_services_count = db.Column(db.Integer, nullable=False)
    duo_services_count = db.Column(db.Integer, nullable=False)
    gift_cards_sold = db.Column(db.Integer, nullable=False)
    gift_cards_value = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<MonthlyStatistics {self.month}-{self.year}>'

    def serialize(self):
        return {
            "id": self.id,
            "month": self.month,
            "year": self.year,
            "total_revenue": self.total_revenue,
            "individual_services_count": self.individual_services_count,
            "duo_services_count": self.duo_services_count,
            "gift_cards_sold": self.gift_cards_sold,
            "gift_cards_value": self.gift_cards_value
        }
