// src/pages/About.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, useReducedMotion } from "framer-motion";
import "./About.css";

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


/**/ 

  

  return (
    <div>
      {/* === wrap === */}
      <section className="wrap">
        <motion.div
          className="panel left"
          onMouseEnter={() => setHover("left")}
          onMouseLeave={() => setHover(null)}
          animate={{ flexBasis: bases[0] }}
          transition={commonTransition}
        >
          <div>
            <motion.h2
              className="title"
              animate={{ opacity: hover === "right" ? 0.6 : 1 }}
              transition={commonTransition}
            >
              Strategic Gamer
            </motion.h2>
            <motion.p
              className="desc"
              animate={{ opacity: hover === "left" ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
            >
              I thrive in competitive games where strategy and quick thinking are
              everything. The thrill of teamwork, coordination, and outsmarting
              opponents keeps me endlessly inspired.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="panel center"
          onMouseEnter={() => setHover(null)}
          onMouseLeave={() => setHover(null)}
          animate={{ flexBasis: bases[1] }}
          transition={commonTransition}
        >
          <motion.img
            src="/web_home_self.jpg"
            alt="My portrait"
            className="photo"
            animate={{ scale: hover ? 0.96 : 1 }}
            transition={commonTransition}
          />
          <motion.div
            className="intro"
            style={{ x: "-50%", pointerEvents: sideHover ? "none" : "auto" }}
            animate={{ opacity: sideHover ? 0 : 1, y: sideHover ? 8 : 0 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
            aria-hidden={sideHover}
          >
            <div className="hello">Hello, I’m Boxi Chen</div>
          </motion.div>
        </motion.div>

        <motion.div
          className="panel right"
          onMouseEnter={() => setHover("right")}
          onMouseLeave={() => setHover(null)}
          animate={{ flexBasis: bases[2] }}
          transition={commonTransition}
        >
          <div>
            <motion.h2
              className="title"
              animate={{ opacity: hover === "left" ? 0.6 : 1 }}
              transition={commonTransition}
            >
              Computer Scientist
            </motion.h2>
            <motion.p
              className="desc"
              animate={{ opacity: hover === "right" ? 1 : 0 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
            >
              I find peace in writing code—learning, building, and solving
              problems. With clear goals, I stay motivated and energized to create
              meaningful solutions.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <div style={{ height: "24px" }} />
      <div className="divider" />
      <div style={{ height: "24px" }} />

      {/* === skill bar === */}
      <section className="skillbar">
        <div className="skillbarBody">
          {(() => {
            const reduce = useReducedMotion();
            const appear = (delay) => ({
            initial: { opacity: 0, y: 8 },
            whileInView: { opacity: 1, y: 0 },  
            viewport: { once: true, amount: 0.35 }, 
            transition: {
              duration: reduce ? 0 : 0.35,
              ease: "easeOut",
              delay: reduce ? 0 : delay,
            },
          });

            return (
              <>
                <motion.div className="columnLeft" {...appear(0.4)}>
                  <h3 className="h3" style={{ color: "#2F6FB1" }}>SDE (30%)</h3>
                  <ul className="ul">
                    <li>React · Node.js · REST · CI/CD</li>
                    <li>Frontend interactions & API design</li>
                    <li>Deployments (React+MongoDB)</li>
                  </ul>

                  <h3 className="h3" style={{ color: "#9A7E00", marginTop: 18 }}>ML (30%)</h3>
                  <ul className="ul">
                    <li>Pytorch · scikit-learn · Embeddings</li>
                    <li>Data cleaning & feature engineering</li>
                    <li>Cosine Similarity & MRR & BLEU</li>
                  </ul>
                </motion.div>

                <motion.div className="pieWrap" {...appear(0.0)}>
                  <div className="pie">
                    <span className="pieLabel" style={{ top: "25%", left: "70%", color: "#2F6FB1" }}>SDE</span>
                    <span className="pieLabel" style={{ top: "70%", left: "55%", color: "#9A7E00" }}>ML</span>
                    <span className="pieLabel" style={{ top: "50%", left: "30%", color: "#1D7F5B" }}>Algorithm</span>
                  </div>
                </motion.div>

                <motion.div className="columnRight" {...appear(0.8)}>
                  <h3 className="h3" style={{ color: "#1D7F5B" }}>Algorithm (40%)</h3>
                  <ul className="ul">
                    <li>Graph algorithms (BFS/DFS, Dijkstra, MST)</li>
                    <li>Dynamic programming (LIS, knapsack)</li>
                    <li>Greedy (Huffman coding, activity selection)</li>
                    <li>Randomized (Karger’s min-cut, Monte Carlo)</li>
                  </ul>
                </motion.div>
              </>
            );
          })()}
        </div>
      </section>
      <div style={{ height: "24px" }} />
      <div className="divider" />
      <div style={{ height: "24px" }} />
        {/* ===== About Me · Stages ===== */}
      <section className="aboutStagesTree">
        <div className="timeline">
          {(() => {
            const reduce = useReducedMotion();
            const appear = (d) => ({
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.35 },
              transition: { duration: reduce ? 0 : 0.4, ease: "easeOut", delay: reduce ? 0 : d },
            });

            return (
              <>
                <div className="stageRow">
                  <motion.div className="content left" {...appear(0.00)}>
                    <div className="stageNum">01</div>
                    <img className="thumb" src="/cs2.jpg" alt="Favorite game" />
                    <div>
                      <h3 className="stageHead">FAVORITE GAME</h3>
                      <p className="stageText">
                        Counter-Strike is my favorite game. I’ve spent over 2000 hours playing, and I’ve ranked within the top 3000 on the CS Faceit leaderboard.
                      </p>
                    </div>
                  </motion.div>
                  <div className="node" />
                </div>

                <div className="stageRow">
                  <div className="node" />
                  <motion.div className="content right" {...appear(0.15)}>
                    <div className="stageNum">02</div>
                    <img className="thumb" src="/lizzy.jpg" alt="My dog" />
                    <div>
                      <h3 className="stageHead">MY DOG</h3>
                      <p className="stageText">
                        My dog is a cream-colored French Bulldog. She loves to cuddle close and sleep right next to people.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="stageRow">
                  <motion.div className="content left" {...appear(0.30)}>
                    <div className="stageNum">03</div>
                    <img className="thumb" src="/cooking.jpg" alt="Cooking" />
                    <div>
                      <h3 className="stageHead">FAVORITE ACTIVITY</h3>
                      <p className="stageText">
                        Cooking is my favorite activity. The process itself is enjoyable—it’s my way to unwind and clear my mind after a busy day.                      </p>
                    </div>
                  </motion.div>
                  <div className="node" />
                </div>

                <div className="stageRow">
                  <div className="node" />
                  <motion.div className="content right" {...appear(0.45)}>
                    <div className="stageNum">04</div>
                    <img className="thumb" src="/ideas.webp" alt="Wild ideas" />
                    <div>
                      <h3 className="stageHead">WILD IDEAS</h3>
                      <p className="stageText">
                        I enjoy listening to wild, imaginative ideas and love envisioning what the future could look like.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </>
            );
          })()}
        </div>
      </section>
      {/* ===== Skills by Level ===== */}
      <section className="skillsChart" aria-labelledby="skills-title">
        <h2 id="skills-title" className="chartTitle">Technical Skills</h2>

        <div className="chartGrid">
          {/* Left: Y-axis level labels */}
          <div className="yLabels" aria-hidden="true">
            <span>Expert</span>
            <span>Proficient</span>
            <span>Competent</span>
            <span>Advanced</span>
            <span>Beginner</span>
          </div>

          {/* Right: Bars */}
          <motion.div
            className="bars"
            role="list"
            aria-label="Skills and proficiency levels"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.6 } }
            }}
          >
            {/* Each bar with rise-up effect */}
            <motion.div
              role="listitem"
              className="bar cpp level-proficient"
              data-skill="C++"
              aria-label="C plus plus, Proficient"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />

            <motion.div
              role="listitem"
              className="bar python level-proficient"
              data-skill="Python"
              aria-label="Python, Proficient"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />

            <motion.div
              role="listitem"
              className="bar js level-beginner"
              data-skill="JavaScript"
              aria-label="JavaScript, Beginner"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />

            <motion.div
              role="listitem"
              className="bar htmlcss level-advanced"
              data-skill="HTML / CSS"
              aria-label="HTML and CSS, Advanced"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />

            <motion.div
              role="listitem"
              className="bar sql level-competent"
              data-skill="SQL / NoSQL"
              aria-label="SQL and NoSQL, Competent"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}