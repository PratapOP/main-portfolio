/**
 * ============================================================
 * sections.jsx — All Portfolio Sections
 * ============================================================
 *
 * Responsibilities:
 * - Render each section of the portfolio
 * - Maintain clean, readable content structure
 * - Keep components stateless and presentational
 *
 * Styling, animations, and spacing are handled elsewhere.
 * ============================================================
 */

import React from "react";

/* ============================================================
   HERO / WELCOME SECTION
   ============================================================ */

export function HeroSection() {
  return (
    <section className="section hero">
      <div className="section-inner hero-inner">
        <h1 className="hero-title">Abhiuday Pratap Singh</h1>
        <p className="hero-subtitle">
          Full Stack Development · Data Analysis · Systems Thinking
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT SECTION
   ============================================================ */

export function AboutSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-text">
          Bachelor of Technology student in Information Technology at Jaypee
          University of Information Technology with a strong foundation in
          software development, data analysis, and financial planning.
          Experience spans full-stack development, event-scale financial
          coordination, and building responsible, data-driven systems.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   SKILLS SECTION
   ============================================================ */

export function SkillsSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="row">
          <div className="card">
            <h3>Technical</h3>
            <p>
              React, Next.js, TypeScript, Python, Flask, scikit-learn,
              PostgreSQL, MySQL, Data Analysis, Explainable Machine Learning
            </p>
          </div>

          <div className="card">
            <h3>Logical</h3>
            <p>
              Analytical reasoning, system design thinking, financial analysis,
              data-driven decision making, problem decomposition
            </p>
          </div>

          <div className="card">
            <h3>Interpersonal</h3>
            <p>
              Leadership, stakeholder communication, negotiation,
              presentation, cross-team coordination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE SECTION
   ============================================================ */

export function ExperienceSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="row">
          <div className="card">
            <h3>Finance Committee Head Coordinator</h3>
            <p>
              Led sponsorship strategy and budgeting for large-scale university
              events. Collaborated with national brands and managed financial
              planning, negotiations, and execution.
            </p>
          </div>

          <div className="card">
            <h3>Full Stack Developer Intern</h3>
            <p>
              Developed and maintained production-grade web applications using
              modern frontend and backend technologies while contributing to
              project coordination and sponsor outreach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS SECTION
   ============================================================ */

export function ProjectsSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="row">
          <div className="card">
            <h3>AlgoVerse</h3>
            <p>
              An interactive algorithm and data structure visualizer focused on
              understanding internal mechanics rather than memorization.
            </p>
          </div>

          <div className="card">
            <h3>Employee Stress Analytics</h3>
            <p>
              A machine-learning powered system that predicts stress levels,
              explains contributing factors, and provides actionable insights
              through a live web application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRENDING SECTION
   ============================================================ */

export function TrendingSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-text">
          Currently focused on building responsible analytics systems that
          combine explainable machine learning, ethical data usage, and
          real-world applicability in people and workplace analytics.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   WHY HIRE ME SECTION
   ============================================================ */

export function WhyHireMeSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section-text">
          I bring a balanced perspective across technology, data, and finance,
          with experience owning systems end-to-end. My focus is on building
          solutions that are scalable, understandable, and responsible.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT / HIRE ME SECTION
   ============================================================ */

export function ContactSection() {
  return (
    <section className="section contact">
      <div className="section-inner">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
