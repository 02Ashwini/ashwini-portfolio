import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!configured) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="mono-label block mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-lg bg-surface border border-line px-4 py-3 text-ink placeholder:text-muted/60 focus:border-primary transition-colors outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mono-label block mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-lg bg-surface border border-line px-4 py-3 text-ink placeholder:text-muted/60 focus:border-primary transition-colors outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mono-label block mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What are you looking to build?"
          className="w-full rounded-lg bg-surface border border-line px-4 py-3 text-ink placeholder:text-muted/60 focus:border-primary transition-colors outline-none resize-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-ink text-sm font-medium hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <FiSend />
        </button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-sm text-emerald-400"
            >
              <FiCheck /> Message sent — thanks!
            </motion.p>
          )}
          {status === "error" && !configured && (
            <motion.p
              key="not-configured"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-sm text-amber-400"
            >
              <FiAlertCircle /> Form isn't connected yet — email me directly for now.
            </motion.p>
          )}
          {status === "error" && configured && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-1.5 text-sm text-red-400"
            >
              <FiAlertCircle /> Something went wrong — please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
