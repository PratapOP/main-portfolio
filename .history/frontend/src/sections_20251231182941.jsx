    /**
     * ============================================================
     * sections.jsx — All Portfolio Sections (with Motion)
     * ============================================================
     */

    import React from "react";
    import { motion } from "framer-motion";
    import {
    sectionFade,
    staggerContainer,
    cardFade
    } from "./motion";

    /* ============================================================
    HERO / WELCOME SECTION
    ============================================================ */

    export function HeroSection() {
    return (
        <motion.section
        className="section hero"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
        >
        <div className="section-inner hero-inner">
            <h1 className="hero-title">Abhiuday Pratap Singh</h1>
            <p className="hero-subtitle">
            Full Stack Development · Data Analysis · Systems Thinking
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    ABOUT SECTION
    ============================================================ */

    export function AboutSection() {
    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <p className="section-text">
            Bachelor of Technology student in Information Technology at Jaypee
            University of Information Technology with a strong foundation in
            software development, data analysis, and financial planning.
            Experience spans full-stack development, event-scale financial
            coordination, and building responsible, data-driven systems.
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    SKILLS SECTION
    ============================================================ */

    export function SkillsSection() {
    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <motion.div
            className="row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            {[
                {
                title: "Technical",
                text:
                    "React, Next.js, TypeScript, Python, Flask, scikit-learn, PostgreSQL, MySQL, Data Analysis, Explainable Machine Learning"
                },
                {
                title: "Logical",
                text:
                    "Analytical reasoning, system design thinking, financial analysis, data-driven decision making, problem decomposition"
                },
                {
                title: "Interpersonal",
                text:
                    "Leadership, stakeholder communication, negotiation, presentation, cross-team coordination"
                }
            ].map((item, index) => (
                <motion.div className="card" variants={cardFade} key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    EXPERIENCE SECTION
    ============================================================ */

    export function ExperienceSection() {
    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <motion.div
            className="row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            {[
                {
                title: "Finance Committee Head Coordinator",
                text:
                    "Led sponsorship strategy and budgeting for large-scale university events. Collaborated with national brands and managed financial planning, negotiations, and execution."
                },
                {
                title: "Full Stack Developer Intern",
                text:
                    "Developed and maintained production-grade web applications using modern frontend and backend technologies while contributing to project coordination and sponsor outreach."
                }
            ].map((item, index) => (
                <motion.div className="card" variants={cardFade} key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    PROJECTS SECTION
    ============================================================ */

    export function ProjectsSection() {
    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <motion.div
            className="row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            {[
                {
                title: "AlgoVerse",
                text:
                    "An interactive algorithm and data structure visualizer focused on understanding internal mechanics rather than memorization."
                },
                {
                title: "Employee Stress Analytics",
                text:
                    "A machine-learning powered system that predicts stress levels, explains contributing factors, and provides actionable insights through a live web application."
                }
            ].map((item, index) => (
                <motion.div className="card" variants={cardFade} key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    TRENDING SECTION
    ============================================================ */

    export function TrendingSection() {
    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <p className="section-text">
            Currently focused on building responsible analytics systems that
            combine explainable machine learning, ethical data usage, and
            real-world applicability in people and workplace analytics.
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    WHY HIRE ME SECTION
    ============================================================ */

    export function WhyHireMeSection() {
    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <p className="section-text">
            I bring a balanced perspective across technology, data, and finance,
            with experience owning systems end-to-end. My focus is on building
            solutions that are scalable, understandable, and responsible.
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    CONTACT / HIRE ME SECTION
    ============================================================ */

    export function ContactSection() {
    return (
        <motion.section
        className="section contact"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button type="submit">Send</button>
            </form>
        </div>
        </motion.section>
    );
    }
