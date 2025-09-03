// src/pages/About.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const [hover, setHover] = useState(null); // 'left' | 'right' | null
  const reduce = useReducedMotion();

  const bases = (() => {
    if (hover === "left")  return ["60%", "25%", "15%"];
    if (hover === "right") return ["15%", "25%", "60%"];
    return ["25%", "50%", "25%"]; 
  })();

  const commonTransition = { duration: reduce ? 0 : 0.45, ease: "easeOut" };
  const sideHover = hover === "left" || hover === "right";

  return (
    <div>
      {/* === warp === */}

      <section style={styles.wrap}>
        <motion.div
          style={{ ...styles.panel, ...styles.left }}
          onMouseEnter={() => setHover("left")}
          onMouseLeave={() => setHover(null)}
          animate={{ flexBasis: bases[0] }}
          transition={commonTransition}
        >
          <div style={styles.stack}>
            <motion.h2
              style={styles.title}
              animate={{ opacity: hover === "right" ? 0.6 : 1 }}
              transition={commonTransition}
            >
              Strategic Gamer
            </motion.h2>
              <motion.p
                style={styles.desc}
                animate={{ opacity: hover === "left" ? 1 : 0 }}
                transition={{ duration: reduce ? 0 : 0.3 }}
              >
                I thrive in competitive games where strategy and quick thinking are everything. The thrill of teamwork, coordination, and outsmarting opponents keeps me endlessly inspired.
              </motion.p>
          </div>
        </motion.div>

        <motion.div
          style={{ ...styles.panel, ...styles.center }}
          onMouseEnter={() => setHover(null)}
          onMouseLeave={() => setHover(null)}
          animate={{ flexBasis: bases[1] }}
          transition={commonTransition}
        >
          <motion.img
            src="/web_home_self.jpg"
            alt="My portrait"
            style={styles.photo}
            animate={{ scale: hover ? 0.96 : 1 }}
            transition={commonTransition}
          />
          <motion.div
            style={{ 
              ...styles.intro,
              x:"-50%",
              pointerEvents: sideHover ? "none" : "auto"
            }}
            animate={{
              opacity: sideHover ? 0 : 1,
              y: sideHover ? 8 : 0,
            }}
            transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
            aria-hidden={sideHover}
          >
            <div style={styles.hello}>Hello, I’m Boxi Chen</div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ ...styles.panel, ...styles.right }}
          onMouseEnter={() => setHover("right")}
          onMouseLeave={() => setHover(null)}
          animate={{ flexBasis: bases[2] }}
          transition={commonTransition}
        >
          <div style={styles.stack}>
            <motion.h2
              style={styles.title}
              animate={{ opacity: hover === "left" ? 0.6 : 1 }}
              transition={commonTransition}
            >
              Computer Scientist
            </motion.h2>
              <motion.p
                style={styles.desc}
                animate={{ opacity: hover === "right" ? 1 : 0 }}
                transition={{ duration: reduce ? 0 : 0.3 }}
              >
                I find peace in writing code—learning, building, and solving problems. With clear goals, I stay motivated and energized to create meaningful solutions.
              </motion.p>
          </div>
        </motion.div>
      </section>
      {/* === temp box === */}
      <section style={styles.temp}>
        <h2>Temp Box</h2>
        <p>temp</p>
      </section>

    </div>
  );
}

const styles = {
  wrap: {
    display: "flex",
    width: "100%",
    height: "60vh",
    background: "#0f0f0f",
    borderTop: "1px solid #1b1b1b",
  },
  panel: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    color: "white",
  },
  left: {
    background: "#121212",
    borderRight: "1px solid #1b1b1b",
  },
  center: {
    background: "#151515",
    borderRight: "1px solid #1b1b1b",
  },
  right: {
    background: "#121212",
  },
  title: {
    fontFamily: "monospace",
    fontSize: "clamp(1.1rem, 2.4vw, 2rem)",
    letterSpacing: "0.02em",
    userSelect: "none",
  },
  photo: {
    width: "68%",
    height: "auto",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
    display: "block",
  },
  intro: {
    position: "absolute",
    bottom: "1.2rem",
    left: "50%",
    textAlign: "center",
    maxWidth: "78%",
  },
  hello: {
    fontSize: "clamp(1.2rem, 3vw, 2rem)",
    fontWeight: 700,
    marginBottom: "0.25rem",
  },
  desc: {
    margin: 0,
    color: "#c9c9c9",
    fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
    lineHeight: 1.5,
  },
};
