-- ============================================================
-- schema.sql — Contact Form Database Schema
-- ============================================================
--
-- Purpose:
-- Stores contact / hire me form submissions.
-- Minimal, explicit, and easy to audit.
-- ============================================================

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
