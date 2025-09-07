import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "ok" | "error" | null

  // Simple client-side validation + demo submit
  const onSubmit = (e) => {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.name || !emailOk || !form.message) {
      setStatus("error");
      return;
    }
    // TODO: replace with your real submit (fetch to API / Formspree / etc.)
    setTimeout(() => setStatus("ok"), reduce ? 0 : 300);
  };

  return (
    <main className="contactWrap" aria-labelledby="contact-title">
      <motion.div
        className="contactHeader"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
      >
        <h1 id="contact-title">Get in Touch</h1>
        <p>Questions, opportunities, or just want to say hi? I’d love to hear from you.</p>
      </motion.div>

      {/* full-width divider */}
      <div className="contactDivider" />

      <section className="contactGrid">
        {/* Left: contact info */}
        <motion.aside
          className="contactInfo"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduce ? 0 : 0.45, ease: "easeOut", delay: reduce ? 0 : 0.05 }}
        >
          <h2 className="subTitle">Contact</h2>
          <ul className="infoList">
            <li>
              <span className="label">Email</span>
              <a href="mailto:you@example.com">boxi.chen2025@outlook.com</a>
            </li>
            { <li>
              <span className="label">Phone</span>
              <a href="tel:+1234567890">+1 (626) 366-0799</a>
            </li> }
            <li>
              <span className="label">Location</span>
              <span>Utah, USA</span>
            </li>
          </ul>

          <h2 className="subTitle">Social</h2>
          <ul className="socialList">
            <li><a href="https://www.linkedin.com/in/boxi-chen-622115250/" target="_blank" rel="noreferrer">
            <Linkedin size={18} style={{ marginRight: "6px" }} />
            LinkedIn ↗</a></li>
            <li><a href="https://github.com/K3rpa" target="_blank" rel="noreferrer">
            <Github size={18} style={{ marginRight: "6px" }} />
            GitHub ↗</a></li>
          </ul>

          <p className="note">I typically reply within 24 hours.</p>
        </motion.aside>

        {/* Right: form */}
        <motion.section
          className="contactCard"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduce ? 0 : 0.45, ease: "easeOut", delay: reduce ? 0 : 0.15 }}
        >
          <h2 className="subTitle">Send a Message</h2>
          <form onSubmit={onSubmit} noValidate>
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </label>

            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="How can I help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </label>

            <button className="sendBtn" type="submit">Send Message</button>

            {/* inline status feedback */}
            {status === "ok" && <div className="status ok" role="status">Thanks! Your message has been sent(non-working, please send through your email).</div>}
            {status === "error" && (
              <div className="status err" role="alert">
                Please fill in your name, a valid email, and a message.
              </div>
            )}
          </form>
        </motion.section>
      </section>
    </main>
  );
}
