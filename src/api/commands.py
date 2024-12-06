import click
from api.models import db, UserTransaction, Service, Promotion, GiftCard

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are useful to run cronjobs or tasks outside of the API but still in integration
with your database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users")  # name of our command
    @click.argument("count")  # argument of our command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = UserTransaction(
                name=f"Test User {x}",
                email=f"test_user{x}@test.com",
                phone=f"123456789{x}",
                transaction_number=f"trans_{x}",
                service_id=1  # Assuming a service with ID 1 exists
            )
            db.session.add(user)
            db.session.commit()
            print(f"User: {user.email} created.")

        print("All test users created")

    @app.cli.command("insert-test-services")
    @click.argument("count")
    def insert_test_services(count):
        """
        Command to insert test services.
        Usage: $ flask insert-test-services 5
        """
        print("Creating test services")
        for x in range(1, int(count) + 1):
            service = Service(
                title=f"Service {x}",
                subtitle=f"Subtitle for service {x}",
                description=f"Description for service {x}",
                allergens=f"Allergens for service {x}",
                products=f"Products for service {x}",
                cost=100.0 + x,
                service_type="individual" if x % 2 == 0 else "duo"
            )
            db.session.add(service)
            db.session.commit()
            print(f"Service: {service.title} created.")

        print("All test services created")

    @app.cli.command("insert-test-promotions")
    @click.argument("count")
    def insert_test_promotions(count):
        """
        Command to insert test promotions.
        Usage: $ flask insert-test-promotions 5
        """
        print("Creating test promotions")
        for x in range(1, int(count) + 1):
            promotion = Promotion(
                name=f"Promotion {x}",
                description=f"Description for promotion {x}",
                discount=10.0 * x,
                start_date="2024-01-01",
                end_date="2024-12-31",
                service_id=1  # Assuming a service with ID 1 exists
            )
            db.session.add(promotion)
            db.session.commit()
            print(f"Promotion: {promotion.name} created.")

        print("All test promotions created")

    @app.cli.command("insert-test-gift-cards")
    @click.argument("count")
    def insert_test_gift_cards(count):
        """
        Command to insert test gift cards.
        Usage: $ flask insert-test-gift-cards 5
        """
        print("Creating test gift cards")
        for x in range(1, int(count) + 1):
            gift_card = GiftCard(
                giver_email=f"giver{x}@test.com",
                receiver_email=f"receiver{x}@test.com",
                service_id=1,  # Assuming a service with ID 1 exists
                transaction_number=f"gift_trans_{x}",
                is_redeemed=False
            )
            db.session.add(gift_card)
            db.session.commit()
            print(f"Gift Card: {gift_card.transaction_number} created.")

        print("All test gift cards created")

    @app.cli.command("insert-test-data")
    def insert_test_data():
        """
        Command to insert a full set of test data.
        """
        insert_test_users(5)
        insert_test_services(5)
        insert_test_promotions(3)
        insert_test_gift_cards(2)
        print("All test data inserted.")
