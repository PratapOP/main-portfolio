    /**
     * ============================================================
     * sections.jsx — Sections with Titles & Hierarchy
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
    FEATURED
    ============================================================ */

    export function HeroSection() {
    return (
        <motion.section
        className="section hero"
        variants={sectionFade}
        initial="hidden"
        animate="visible"
        >
        <div className="hero-inner">
            <h1 className="hero-title">Abhiuday Pratap Singh</h1>
            <p className="hero-subtitle">
            Think System, Not People. 
            <br />
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    POSITIONING
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
            <h2 className="section-title">Positioning</h2>
            <p className="section-text">
            Currently doing Bachelors in Information Technology at Jaypee University
            of Information Technology
            <br/><br/>
            Fully focused on building production-grade
            systems that combine engineering, analytics, and decision-making.
            Experience spans full-stack development, financial coordination,
            and responsible data systems.I'm passionate about solving real problems through thoughtful engineering and data-driven decision-making.
            <br/><br/>
            Currently exploring the intersection of machine learning, ethics, and user-centric design to create impactful solutions.
            To me, technology is a tool to empower individuals and organizations alike.
            Everything I build is driven by a commitment to clarity, responsibility, and scalability.
            <br/><br/>
            To find out more, feel free to reach out!
            <br/>
            Mail: <a href="mailto:abhiuday17@gmail.com">abhiuday17@gmail.com</a>
            <br/>
            LinkedIn: <a href="https://www.linkedin.com/in/abhiuday-pratap-singh-818180287/">https://www.linkedin.com/in/abhiuday17/</a>
            <br/>
            GitHub: <a href="https://github.com/PratapOP">https://github.com/PratapOP</a>
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    CAPABILITIES
    ============================================================ */

    export function SkillsSection() {
    const skills = [
        {
        title: "Languages & Frameworks",
        text:
            "Python, JavaScript, C++, Java, SQL, HTML, CSS, C#"
        },
        {
        title: "Engineering",
        text:
        <li>React</li>
        <li>Node.js</li>        <li>Express.js</li>
        <li>Django</li>
        <li>Flask</li>
        <li>RESTful APIs</li>

            
        },
        {
        title: "Data & Analysis",
        text:
            "Machine learning, explainable models, data analysis, visualization, scikit-learn"
        },
        {
        title: "Leadership & Execution",
        text:
            "Financial planning, Sponsorship management, Stakeholder communication, Presentations, Budgeting"
        }
    ];

    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <h2 className="section-title">Capabilities</h2>
        </div>

        <motion.div
            className="row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {skills.map((item, index) => (
            <motion.div className="card" variants={cardFade} key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </motion.div>
            ))}
        </motion.div>
        </motion.section>
    );
    }

    /* ============================================================
    EXPERIENCE
    ============================================================ */

    export function ExperienceSection() {
    const roles = [
        {
        title: "Finance Committee Head Coordinator",
        text:
            "Led sponsorship strategy and budgeting for large-scale university events, working with national brands and managing financial execution end-to-end."
        },
        {
        title: "Full Stack Developer Intern",
        text:
            "Built and maintained production web applications using modern frontend and backend stacks, while supporting project coordination and sponsor outreach."
        },
        {
        title: "Management Trainee",
        text:
            "Contributed to event planning, client servicing, vendor coordination, and live project execution in fast-moving environments."
        }
    ];

    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <h2 className="section-title">Experience</h2>
        </div>

        <motion.div
            className="row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {roles.map((item, index) => (
            <motion.div className="card" variants={cardFade} key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </motion.div>
            ))}
        </motion.div>
        </motion.section>
    );
    }

    /* ============================================================
    PROJECTS
    ============================================================ */

    export function ProjectsSection() {
    const projects = [
        {
        title: "AlgoVerse",
        text:
            "An interactive algorithm and data structure visualizer designed to shift learning from memorization to understanding."
        },
        {
        title: "Employee Stress Analytics",
        text:
            "A machine-learning powered system that predicts stress levels, explains contributing factors, and delivers actionable insights."
        },
        {
        title: "Smart Workplace Analytics",
        text:
            "A consent-first analytics platform focused on ethical data usage and explainable insights for workplace wellbeing."
        }
    ];

    return (
        <motion.section
        className="section"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="section-inner">
            <h2 className="section-title">Featured Work</h2>
        </div>

        <motion.div
            className="row"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {projects.map((item, index) => (
            <motion.div className="card" variants={cardFade} key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </motion.div>
            ))}
        </motion.div>
        </motion.section>
    );
    }

    /* ============================================================
    CURRENT FOCUS
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
            <h2 className="section-title">Current Focus</h2>
            <p className="section-text">
            Building responsible analytics systems that balance insight with ethics,
            emphasizing explainable machine learning, consent-first data practices,
            and real-world applicability.
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    WHY THIS PROFILE
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
            <h2 className="section-title">Why This Profile</h2>
            <p className="section-text">
            I approach systems as products, not demos. My work prioritizes clarity,
            responsibility, and scalability, with the ability to own ideas from
            concept through deployment.
            </p>
        </div>
        </motion.section>
    );
    }

    /* ============================================================
    CONTACT
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
            <h2 className="section-title">Get in Touch</h2>
            <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="4" />
            <button type="submit">Send</button>
            </form>
        </div>
        </motion.section>
    );
    }
