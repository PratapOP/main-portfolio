from flask import Flask, render_template, request, redirect, url_for, flash
from db import get_db_connection

app = Flask(__name__)
app.secret_key = "netflix-portfolio-secret-key"  # required for flash messages

# ===== HOME PAGE =====
@app.route("/")
def home():
    return render_template("index.html")

# ===== CONTACT PAGE (GET) =====
@app.route("/contact", methods=["GET"])
def contact():
    return render_template("contact.html")

# ===== CONTACT FORM HANDLER (POST) =====
@app.route("/contact", methods=["POST"])
def handle_contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    if not name or not email or not message:
        flash("All fields are required.", "error")
        return redirect(url_for("contact"))

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        query = """
            INSERT INTO contact_messages (name, email, message)
            VALUES (%s, %s, %s)
        """
        cursor.execute(query, (name, email, message))
        conn.commit()

        cursor.close()
        conn.close()

        flash("Your message has been sent successfully.", "success")

    except Exception as e:
        print("Database Error:", e)
        flash("Something went wrong. Please try again later.", "error")

    return redirect(url_for("contact"))

# ===== CUSTOM 404 HANDLER =====
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

# ===== RUN SERVER =====
if __name__ == "__main__":
    app.run()

