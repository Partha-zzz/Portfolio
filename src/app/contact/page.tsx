"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import BrutalButton from "@/components/BrutalButton";
import { Mail, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all required fields (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    const endpoint =
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
      process.env.VITE_FORMSPREE_ENDPOINT ||
      "https://formspree.io/f/myezdvvn";

    setIsSubmitting(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "General Inquiry",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && Array.isArray(data.errors)) {
          setErrorMsg(data.errors.map((err: { message: string }) => err.message).join(", "));
        } else {
          setErrorMsg("Something went wrong. Please try again or contact me directly.");
        }
      }
    } catch {
      setErrorMsg("Transmission failed. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 py-6">
      <SectionHeading
        number="05"
        title="LET'S BUILD SOMETHING."
        subtitle="Have a project idea, machine learning query, or software collaboration? Reach out below!"
        badge="GET IN TOUCH"
        badgeColor="yellow"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#635BFF] text-white border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-8 brutal-shadow-md space-y-6 transition-colors">
            <h3 className="font-extrabold text-3xl uppercase tracking-tight">
              DIRECT CHANNELS
            </h3>

            <p className="text-base font-bold text-white/90 leading-relaxed">
              Feel free to send an email directly or connect on developer platforms.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:atomic.here007@gmail.com"
                className="flex items-center gap-4 bg-white text-[#111111] p-4 border-2 border-[#111111] rounded-xl brutal-shadow-sm font-mono font-bold text-sm hover:bg-[#FFD600] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#635BFF] stroke-[2.5]" />
                <span>atomic.here007@gmail.com</span>
              </a>

              <a
                href="https://github.com/Partha-zzz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white text-[#111111] p-4 border-2 border-[#111111] rounded-xl brutal-shadow-sm font-mono font-bold text-sm hover:bg-[#FFD600] transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
                <span>github.com/Partha-zzz</span>
              </a>

              <a
                href="https://www.linkedin.com/in/partha-sarathi-sarkar-7385a8367/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white text-[#111111] p-4 border-2 border-[#111111] rounded-xl brutal-shadow-sm font-mono font-bold text-sm hover:bg-[#FFD600] transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>linkedin.com/in/partha-sarathi-sarkar</span>
              </a>
            </div>
          </div>

          <div className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 brutal-shadow-md">
            <span className="font-mono text-xs font-black uppercase bg-white text-[#111111] px-2.5 py-1 border border-[#111111] rounded shadow-[2px_2px_0px_#111111] block mb-2 w-fit">
              RESPONSE TIME
            </span>
            <p className="font-extrabold text-lg">
              Usually respond within 24–48 hours for academic & software inquiries.
            </p>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-[#1A1A1A] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-2xl p-6 md:p-10 brutal-shadow-lg transition-colors">
            <h3 className="font-black text-2xl md:text-3xl text-[#111111] dark:text-[#F7F7F2] uppercase tracking-tight mb-6 pb-3 border-b-3 border-[#111111] dark:border-[#F7F7F2]">
              SEND A DIRECT MESSAGE
            </h3>

            {submitted ? (
              <div
                aria-live="polite"
                className="bg-[#FFD600] text-[#111111] border-3 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-8 text-center brutal-shadow-md space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-[#111111] mx-auto stroke-[2.5]" />
                <h4 className="font-black text-3xl uppercase">
                  MESSAGE TRANSMITTED!
                </h4>
                <p className="font-mono text-sm font-bold text-[#111111]/80">
                  &gt; message delivered ✓
                </p>
                <p className="font-mono text-xs font-bold text-[#111111]/70">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMsg(null);
                  }}
                  className="mt-4 font-mono text-xs font-black bg-white text-[#111111] px-4 py-2 border-2 border-[#111111] rounded-lg brutal-shadow-sm hover:bg-[#635BFF] hover:text-white transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-[#111111] text-[#FFD600] p-3 rounded-lg font-mono text-xs font-bold mb-4 flex items-center gap-2 border border-[#FFD600]/30">
                  <span className="animate-pulse text-[#FFD600]">❯</span>
                  <span>
                    $ ./contact-partha --send-message{" "}
                    {isSubmitting && "(transmitting packet...)"}
                  </span>
                </div>

                {errorMsg && (
                  <div
                    aria-live="assertive"
                    className="bg-red-500 text-white font-mono text-xs font-bold p-3.5 rounded-xl border-2 border-[#111111] brutal-shadow-sm flex items-start gap-2"
                  >
                    <span>⚠ TRANSMISSION FAILED: {errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-black uppercase text-[#111111] dark:text-[#F7F7F2] mb-2"
                    >
                      NAME &gt; *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Partha"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-3.5 font-mono text-sm font-bold text-[#111111] dark:text-[#F7F7F2] focus:outline-none focus:ring-2 focus:ring-[#635BFF] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-black uppercase text-[#111111] dark:text-[#F7F7F2] mb-2"
                    >
                      EMAIL &gt; *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="e.g. name@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-3.5 font-mono text-sm font-bold text-[#111111] dark:text-[#F7F7F2] focus:outline-none focus:ring-2 focus:ring-[#635BFF] disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs font-black uppercase text-[#111111] dark:text-[#F7F7F2] mb-2"
                  >
                    SUBJECT / PROJECT TYPE &gt;
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Machine Learning Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    disabled={isSubmitting}
                    className="w-full bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-3.5 font-mono text-sm font-bold text-[#111111] dark:text-[#F7F7F2] focus:outline-none focus:ring-2 focus:ring-[#635BFF] disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-black uppercase text-[#111111] dark:text-[#F7F7F2] mb-2"
                  >
                    MESSAGE &gt; *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    disabled={isSubmitting}
                    className="w-full bg-[#F7F7F2] dark:bg-[#242424] border-2 border-[#111111] dark:border-[#F7F7F2] rounded-xl p-3.5 font-mono text-sm font-bold text-[#111111] dark:text-[#F7F7F2] focus:outline-none focus:ring-2 focus:ring-[#635BFF] disabled:opacity-50"
                  />
                </div>

                <BrutalButton
                  type="submit"
                  variant="yellow"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full disabled:opacity-50"
                >
                  {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE ➔"}
                </BrutalButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
