"use client";

import { useState, useEffect, type FormEvent } from "react";

interface InquiryModalProps {
  printTitle: string;
  onClose: () => void;
}

export function InquiryModal({ printTitle, onClose }: InquiryModalProps) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const contact = data.get("contact") as string;
    const concept = data.get("concept") as string;

    const subject = encodeURIComponent(`Print Inquiry: ${printTitle}`);
    const body = encodeURIComponent(
      `Name: ${name}\nContact: ${contact}\nPrint: ${printTitle}\n\nConcept:\n${concept}`
    );

    window.location.href = `mailto:shirelleganon@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {sent ? (
          <div className="form-success">
            <h3>Thank you</h3>
            <p>Your email client should have opened with the inquiry details.</p>
          </div>
        ) : (
          <>
            <h2>Inquire</h2>
            <p className="modal-subtitle">
              Inquiry for &ldquo;{printTitle}&rdquo;
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Phone Number or Email</label>
                <input id="contact" name="contact" type="text" required />
              </div>

              <div className="form-group">
                <label htmlFor="concept">Concept</label>
                <textarea id="concept" name="concept" required />
              </div>

              <button type="submit" className="form-submit">
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
