// src/App.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function App() {
  const reduce = useReducedMotion();

  const listVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.5,
        ease: "easeOut",
        staggerChildren: reduce ? 0 : 0.15,
        delayChildren: reduce ? 0 : 1,
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.45 } },
  };

  const works = [
    {
      id: 1,
      title: "Habit Stacker",
      tag: "Website Design and Deployment",
      img: "/habit_stacker_pic.png",
      link: "https://github.com/pnidhi26/habit-hop"
    },
    {
      id: 2,
      title: "Text-Based Image Search",
      tag: "Machine Learning desgin and implement",
      img: "/search_tool_pic.png",
      link: "https://github.com/r-butl/TextBasedImageSearch"
    },
    {
      id: 3,
      title: "Memory Architecture for Generative Agent",
      tag: "LLM Agent Memory Design",
      img: "/bot_pic.png ",
      link:"https://github.com/K3rpa/LLM_based_agent_simulation"
    },
  ];

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <section style={styles.hero}>
        <div style={styles.left}>
          <div style={styles.photoWrap}>
            <div style={styles.blob} aria-hidden />
            <img src="/self_pic.jpg" alt="Portrait of Boxi Chen" style={styles.photo} />
          </div>
        </div>

        <div style={styles.right}>
          <h1 style={styles.title}>
            Hey <span style={styles.underline}>Friends</span>
            <span style={styles.wave}> 👋</span>
          </h1>
            <p style={styles.lead}>
                I’m Boxi. I’m a software engineer who loves building interactive web apps,
                solving algorithmic problems, and exploring new technologies.
                Welcome to my personal website!
                <motion.span
                aria-hidden="true"
                style={styles.caret}
                animate={{ opacity: reduce ? 1 : [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </p>
        </div>
      </section>

      {/* ===== Recent Work Section ===== */}
      <section style={styles.recent}>
        <div style={styles.recentHeader}>
          <div style={styles.hr} />
          <h2 style={styles.recentTitle}>SOME OF MY LATEST WORK</h2>
          <div style={styles.hr} />
        </div>

        <motion.div
          style={styles.grid}
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }} 
        >
          {works.map((w) => (
            <motion.article
              key={w.id}
              style={styles.card}
              variants={itemVariants}
              whileHover={{ y: reduce ? 0 : -4, boxShadow: reduce ? styles.card.boxShadow : "0 12px 28px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
            <Link to={w.link} style={styles.cardLink}>
              <div style={styles.thumbWrap}>
                <img src={w.img || "/web_home_self.jpg"} alt={w.title} style={styles.thumb} />
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{w.title}</h3>
                <p style={styles.cardMeta}>{w.tag}</p>
              </div>
            </Link>

            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    padding: "3rem 2rem",
    background: "#fff7f0",
    minHeight: "60vh", 
  },
  left: { flex: "0 0 42%", display: "flex", justifyContent: "center" },
  photoWrap: { position: "relative", width: "min(360px, 80%)", aspectRatio: "1 / 1" },
  blob: {
    position: "absolute",
    inset: "6% 12% 18% 0%",
    background: "#ffd469",
    borderRadius: "50% 45% 55% 50% / 55% 50% 50% 45%",
    filter: "blur(0.5px)",
  },
  photo: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    border: "6px solid #fff7f0",
  },
  right: { flex: "1 1 58%", color: "#1f1f1f" },
  title: { fontSize: "clamp(2.2rem, 5vw, 3.2rem)", lineHeight: 1.1, margin: 0, fontWeight: 800, letterSpacing: "-0.02em" },
  underline: {
    backgroundImage: "linear-gradient(transparent 60%, #b3e6ff 60%, #b3e6ff 90%, transparent 90%)",
    padding: "0 0.15em",
    borderRadius: "4px",
  },
  wave: { display: "inline-block", transformOrigin: "70% 70%" },
  lead: { marginTop: "1rem", fontSize: "clamp(1rem, 2.1vw, 1.25rem)", lineHeight: 1.7, color: "#333", maxWidth: "48ch" },
  caret: {
    display: "inline-block",
    width: "0.6ch",
    height: "1em",
    borderRight: "2px solid #333",
    marginLeft: "4px",
    verticalAlign: "-0.15em",
  },

  // ===== Recent Work =====
  recent: {
    background: "#fafafa",
    padding: "3rem 2rem 4rem",
  },
  recentHeader: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  recentTitle: {
    margin: 0,
    fontSize: "0.9rem",
    letterSpacing: "0.15em",
    color: "#6b6b6b",
    fontWeight: 700,
  },
  hr: { height: 1, background: "#e4e4e4" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    overflow: "hidden",
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
  },
  thumbWrap: { padding: "0.9rem 0.9rem 0", display: "flex", justifyContent: "center" },
  thumb: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    background: "#f3f3f3",
  },
  cardBody: { padding: "0.9rem 1rem 1.1rem" },
  cardTitle: { margin: 0, fontSize: "1.05rem", color: "#1d1d1d", fontWeight: 700 },
  cardMeta: { margin: "0.35rem 0 0", color: "#6e6e6e", fontSize: "0.95rem" },
  cardLink: {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  height: "100%",
},
};
