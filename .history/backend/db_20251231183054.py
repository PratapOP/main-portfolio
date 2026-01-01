"""
============================================================
db.py — MySQL Database Layer
============================================================

Responsibilities:
- Create and manage MySQL connections
- Execute database insert operations
- Keep SQL logic isolated from the API layer

This file should contain NO Flask code.
============================================================
"""

import os
import mysql.connector


def get_connection():
    """
    Create a new database connection using environment variables.
    A fresh connection is used per operation to keep things simple
    and safe for this project scope.
    """
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )


def insert_contact(name, email, message):
    """
    Insert a contact form submission into the database.

    Parameters:
    - name (str)
    - email (str)
    - message (str)
    """

    connection = get_connection()
    cursor = connection.cursor()

    try:
        query = """
            INSERT INTO contacts (name, email, message)
            VALUES (%s, %s, %s)
        """
        cursor.execute(query, (name, email, message))
        connection.commit()
    finally:
        # Always close resources explicitly
        cursor.close()
        connection.close()
