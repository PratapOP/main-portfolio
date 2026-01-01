"""
============================================================
app.py — Flask API for Contact Form
============================================================

Responsibilities:
- Initialize Flask application
- Expose REST endpoints
- Validate incoming requests
- Delegate database operations to db.py

This is an API-only backend.
No templates. No HTML rendering.
============================================================
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from db import insert_contact


def create_app():
    """
    Application factory.
    Keeps app creation explicit and testable.
    """
    app = Flask(__name__)

    # Enable CORS so the React frontend can talk to this API
    CORS(app)

    @app.route("/contact", methods=["POST"])
    def contact():
        """
        Handle contact / hire me form submissions.

        Expected JSON payload:
        {
          "name": "string",
          "email": "string",
          "message": "string"
        }
        """

        data = request.get_json()

        # Basic validation — explicit and readable
        if not data:
            return jsonify({"error": "Invalid JSON payload"}), 400

        name = data.get("name", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()

        if not name or not email or not message:
            return jsonify({"error": "All fields are required"}), 400

        try:
            # Delegate database insertion
            insert_contact(name, email, message)
        except Exception as e:
            # Do not leak internal errors to the client
            return jsonify({"error": "Failed to store message"}), 500

        return jsonify({"status": "ok"}), 200

    return app


# Run locally for development
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
