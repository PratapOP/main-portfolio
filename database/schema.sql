-- =========================================
-- NETFLIX ORIGINAL PORTFOLIO — DATABASE
-- Phase 6: Contact Form Storage
-- =========================================

CREATE DATABASE IF NOT EXISTS netflix_portfolio;
USE netflix_portfolio;

CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
