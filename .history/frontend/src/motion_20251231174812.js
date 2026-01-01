    /**
     * ============================================================
     * motion.js — Centralized Motion Presets
     * ============================================================
     *
     * Responsibilities:
     * - Define reusable animation variants
     * - Keep motion subtle, slow, and cinematic
     * - Avoid per-component animation duplication
     *
     * Framer Motion is used intentionally and sparingly.
     * ============================================================
     */

    /* ============================================================
    Section Fade-In (used when section enters viewport)
    ============================================================ */

    export const sectionFade = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] // smooth, cinematic easing
        }
    }
    };

    /* ============================================================
    Card Stagger Container
    ============================================================ */

    export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.12
        }
    }
    };

    /* ============================================================
    Individual Card Animation
    ============================================================ */

    export const cardFade = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
        }
    }
    };
