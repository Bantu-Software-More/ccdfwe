"use client";

import { useState } from "react";
import { contactContent } from "@/content/contact";

export default function ContactForm() {
  const { form } = contactContent;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const useFormspree = form.formspreeId && form.formspreeId.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (useFormspree) {
      setStatus("submitting");
      try {
        const res = await fetch(`https://formspree.io/f/${form.formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    // Mailto fallback
    const subject = encodeURIComponent(formData.subject || "Website Enquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${form.mailtoFallback}?subject=${subject}&body=${body}`;
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">Message Sent!</h3>
        <p className="text-emerald-700">Thank you for reaching out. We will get back to you soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-emerald-700 underline text-sm hover:text-emerald-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          placeholder="What is this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-y"
          placeholder="Your message..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        {status === "submitting" ? "Sending…" : useFormspree ? "Send Message" : "Open Email Client"}
      </button>

      {!useFormspree && (
        <p className="text-xs text-gray-500 text-center">
          This will open your email client.{" "}
          <a href={`mailto:${form.mailtoFallback}`} className="underline hover:text-gray-700">
            Or email us directly.
          </a>
        </p>
      )}
    </form>
  );
}
