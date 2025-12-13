import mysql.connector
import os

def get_db_connection():
    """
    Creates and returns a MySQL database connection.
    Credentials are loaded from environment variables.
    """

    connection = mysql.connector.connect(
        host=os.getenv("DB_HOST", "localhost"),
        user=os.getenv("DB_USER", "root"),
        password=os.getenv("DB_PASSWORD", ""),
        database=os.getenv("DB_NAME", "netflix_portfolio")
    )

    return connection
