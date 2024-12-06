import os
from flask_admin import Admin
from .models import db, Service, GiftCard, UserTransaction, Promotion, MonthlyStatistics
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Mizu Admin', template_mode='bootstrap3')

    # Add your models here
    admin.add_view(ModelView(Service, db.session))
    admin.add_view(ModelView(GiftCard, db.session))
    admin.add_view(ModelView(UserTransaction, db.session))
    admin.add_view(ModelView(Promotion, db.session))
    admin.add_view(ModelView(MonthlyStatistics, db.session))

    # You can duplicate that line to add new models
    # admin.add_view(ModelView(YourModelName, db.session))
