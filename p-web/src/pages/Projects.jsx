import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Project.css";

export const projects = [
  {
    id: "p1",
    title: "Habit Stacker",
    year: 2025,
    type: "project",
    summary:
      "A full-stack habit tracking web application that helps users plan, schedule, and monitor daily and weekly habit goals. Features include customizable and predefined activities, progress analytics, and a responsive UI accessible across devices.",
    role: [
      "Scrum Master & Team Leader – coordinated a 5-member team, managed sprints, and facilitated agile ceremonies",
      "Led UI/UX prototyping in Figma and developed the core frontend using React",
      "Contributed to backend API design and database integration",
    ],
    tech: {
      languages: ["JavaScript", "Python"],
      tools: [
        "React",
        "MongoDB",
        "Google Cloud",
        "Netlify",
        "GitHub CI/CD",
        "Jest",
        "Istanbul",
        "Figma",
      ],
    },
    links: {
      repo: "https://github.com/pnidhi26/habit-hop",
      demo: "https://www.youtube.com/watch?v=w0YKCoaPrCU",
      external: "https://habithop.netlify.app/",
    },
    thumb: "/habit_stacker_pic.png",
  },
  {
    id: "p2",
    title: "Text-Based Image Search",
    year: 2025,
    type: "project",
    summary:
      "A text-to-image retrieval system: a custom PyTorch model ranks images using DINOv2-embedded image DB and MiniLM-embedded text.",
    role: [
      "Implemented image embedding pipeline with Dinov2 to encode the entire image database",
      "Developed evaluation framework using Mean Reciprocal Rank (MRR) and integrated it to select and display top-ranked outputs",
      "Collaborated on neural network training and performance testing with recall, precision, and Jaccard similarity metrics",
    ],
    tech: {
      languages: ["Python"],
      tools: ["PyTorch", "Dinov2", "MiniLM-L6-v2", "Cosine Similarity", "MRR"],
    },
    links: {
      repo: "https://github.com/r-butl/TextBasedImageSearch",
    },
    thumb: "/search_tool_pic.png",
  },
  {
    id: "p3",
    title: "Memory Architecture for Generative Agent",
    year: 2025,
    type: "Project",
    summary:
      "A research system exploring memory architectures for LLM-based agents, simulating sensory, short-term, and long-term memory to study how agents best approximate human-like retention and reasoning.",
    role: [
      "Designed and implemented an event-driven simulation with tick-based updates",
      "Developed memory scoring with OpenAI API embeddings, cosine similarity, and BLEU metrics",
      "Evaluated episodic, semantic, and procedural memory types for retention and reasoning accuracy",
    ],
    tech: {
      languages: ["Python"],
      tools: ["OpenAI API", "Cosine Similarity", "BLEU"],
    },
    links: { 
      repo: "https://github.com/K3rpa/LLM_based_agent_simulation",
      demo: "https://www.youtube.com/watch?v=d-ju9s9O6Hw",
      external: "https://docs.google.com/document/d/1FGDz04GW7XZqyYmeO3mc6lRoJhomvn5pxqIf1NyiQWQ/edit?tab=t.0",
     },
    thumb: "/bot_pic.png",
  },
  {
    id: "p4",
    title: "DevOps",
    year: 2024,
    type: "assignment",
    summary:
      "Course projects exploring DevOps practices through deploying containerized microservices and AI workflows on GCP, using automation, orchestration, and CI/CD pipelines to manage infrastructure and deployment lifecycles.",
      role: [
      "Provisioned and migrated virtual machines on Google Cloud Platform using CLI and snapshots",
      "Automated microservice deployment with Ansible and Docker (frontend, backend, database, API gateway)",
      "Deployed services to Kubernetes clusters, configured builds, and created run scripts",
      "Implemented GitLab CI/CD pipelines for microservices and AI workflows with conditional deployment logic",
    ],
    tech: {
      languages: ["Python", "YAML", "Shell"],
      tools: ["GCP", "Ansible", "Docker", "Kubernetes", "GitLab CI/CD"],
    },
    thumb: "/devops.png",
  },
  {
    id: "p5",
    title: "ASL Learning App",
    year: 2023,
    type: "project",
    summary:
      "A Flutter-based Android app for learning American Sign Language, featuring daily news, an interactive sign learning library, and mini-games. Supports Google account authentication with Firebase backend.",
    role: [
      "Designed and developed the mobile application using Flutter (Dart) and Android Studio",
      "Integrated Firebase for user authentication, database, and data storage",
      "Implemented key features including daily news feed, sign learning modules, and interactive games",
    ],

    tech: {
      languages: ["Dart"],
      tools: ["Flutter", "Android Studio", "Firebase", "Google Authentication"],
    },
    links: { repo: "https://github.com/csuchico-csci467/CINS467-S23-Boxi-Chen" },
    thumb: "/ASL.png",
  },
  {
    id: "p6",
    title: "Budget Travel App",
    year: 2023,
    type: "project",
    summary:
      "A travel planning app that helps users design budget-friendly trips. Users enter origin and destination, add stopovers, and receive curated recommendations for food, lodging, and entertainment using Yelp API.",
    role: [
      "Developed backend with Django to manage trip data and user requests",
      "Integrated Yelp API with custom Python scripts to fetch and rank top 20 cost-effective options near destinations and stopovers",
      "Built RESTful endpoints to support the React Native frontend",
    ],    
      
    tech: {
      languages: ["Python", "JavaScript", "Json"],
      tools: ["Django", "React Native", "Yelp API"],
    },
    links: { repo: "https://github.com/ChicoState/BudgetTravel" },
    thumb: "travel.png",
  },
  {
    id: "p7",
    title: "YOLO Fine-Tuning for Object Detection",
    year: 2025,
    type: "assignment",
    summary:
      "An object detection assignment using PyTorch YOLO, fine-tuning the model with both large-scale and small-size datasets to compare performance across three versions, applied to real driving camera footage for evaluation.",
    role: [
      "Trained YOLO models on datasets of different scales to analyze effects of fine-tuning",
      "Compared detection accuracy across three models using real-world driving camera inputs",
      "Evaluated model trade-offs in precision, recall, and robustness under varied data sizes",
    ],
    tech: {
      languages: ["Python"],
      tools: ["PyTorch", "YOLO"],
    },
    links: { 
      repo: "https://github.com/K3rpa/CSCI611_Spring25_Boxi_Chen/tree/A3",
      demo: "https://www.youtube.com/watch?v=Miidpg8KKZc&feature=youtu.be",
     },
    thumb: "/yolo.jpg",
  },
  {
    id: "p8",
    title: "Neural Style Transfer with VGG",
    year: 2025,
    type: "assignment",
    summary:
      "An image generation assignment using a pre-trained VGG model in PyTorch, fine-tuned to extract target image style features and apply them to transform new images with artistic styles.",
    role: [
      "Implemented neural style transfer pipeline in PyTorch with pre-trained VGG",
      "Fine-tuned selected layers to capture deep style features from target images",
      "Generated stylized outputs by combining content representations with extracted style features",
    ],
    tech: {
      languages: ["Python"],
      tools: ["PyTorch", "VGG"],
    },
    links: { repo: "https://github.com/K3rpa/CSCI611_Spring25_Boxi_Chen/tree/A4" },
    thumb: "/style.jpg",
  },
];

/* ------------ Helpers ------------ */
const primaryLinkOf = (links = {}) =>
  links.external || links.repo || links.demo || links.doc || "#";

/* ------------ Variants ------------ */
const listVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemVariants = (reduce) => ({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.38, ease: "easeOut" } },
});

/* ------------ Chip component ------------ */
const Chip = ({ label }) => <span className="chip">{label}</span>;

/* ------------ Row component ------------ */
function ProjectRow({ p, reduce }) {
  const roleText = Array.isArray(p.role) ? p.role.join(" · ") : p.role;
  const primary = primaryLinkOf(p.links);

  const openPrimary = (e) => {
    // if clicking one of the quick links, don't trigger row click
    if (e.target.closest(".qBtn")) return;
    window.open(primary, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      className="projRow"
      variants={itemVariants(reduce)}
      onClick={openPrimary}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") openPrimary(e); }}
      aria-label={`Open project: ${p.title}`}
    >
      <div className="thumbWrap">
        <img
          src={p.thumb || "/img/placeholder-4x3.jpg"}
          alt={p.title}
          className="thumb"
          loading="lazy"
        />
      </div>

      <div className="content">
        <div className="titleLine">
          <h3 className="title">{p.title}</h3>
          <span className="meta">
            {p.year ? `${p.year} · ` : ""}
            {p.type === "assignment" ? "Assignment" : "Project"}
          </span>
        </div>

        <p className="summary clamp2">{p.summary}</p>

        {p.role && (
          <div className="role">
            <span className="label">My role:</span>

            {Array.isArray(p.role) ? (
              <ul className="roleList">
                {p.role.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            ) : (
              <span className="roleText">{p.role}</span>
            )}
          </div>
        )}

        <div className="chips">
          {p.tech?.languages?.slice(0, 5).map((t) => <span key={t} className="chip">{t}</span>)}
          {p.tech?.tools?.slice(0, 5).map((t) => <span key={t} className="chip">{t}</span>)}
        </div>

        {/* stays at bottom-right */}
        <div className="quickLinks" aria-label="Quick links">
          {p.links?.repo && (
            <a href={p.links.repo} target="_blank" rel="noreferrer" className="qBtn" aria-label="Open repository">
              Repo ↗
            </a>
          )}
          {p.links?.demo && (
            <a href={p.links.demo} target="_blank" rel="noreferrer" className="qBtn" aria-label="Open demo">
              Demo ↗
            </a>
          )}
          {p.links?.doc && (
            <a href={p.links.doc} target="_blank" rel="noreferrer" className="qBtn" aria-label="Open docs">
              Doc ↗
            </a>
          )}
          {p.links?.external && (
            <a href={p.links.external} target="_blank" rel="noreferrer" className="qBtn" aria-label="Open external link">
              Link ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

/* ------------ Section ------------ */
export default function ProjectsList({ items = projects, title = "Projects & Assignments" }) {
  const reduce = useReducedMotion();

  return (
    <section className="projectsSection" aria-labelledby="projects-title">
      <h2 id="projects-title" className="projectsTitle">{title}</h2>
      <div className="projectsDivider" />

      <motion.div
        className="projList"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {items.map((p) => (
          <ProjectRow key={p.id} p={p} reduce={reduce} />
        ))}
      </motion.div>
    </section>
  );
}
