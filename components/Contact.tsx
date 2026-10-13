"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/30 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="reveal mb-16 text-center opacity-0">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            Let's talk!
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="reveal opacity-0">
            <div className="rounded-lg border border-border bg-card p-8 shadow-card">
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Email
                    </h4>
                    <a
                      href="mailto:rizal.fatah.rsf@gmail.com"
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      rizal.fatah.rsf@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Phone
                    </h4>
                    <a
                      href="tel:+1234567890"
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      +62 8954 0164 2995
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Location
                    </h4>
                    <p className="text-lg font-medium">
                      Sukoharjo, Central Java
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-lg border border-primary/10 bg-primary/5 p-6">
                <div className="mb-2 flex items-center gap-2">
                  <h4 className="text-lg font-semibold">Availability</h4>
                </div>
                <p className="text-muted-foreground">
                  Currently
                  <span
                    aria-hidden="true"
                    className="mx-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"
                  />
                  <span className="mr-1 font-medium text-green-500">
                    Available
                  </span>
                  for freelance projects and consulting. I typically respond to
                  all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal animate-delay-200 opacity-0">
            <div className="relative overflow-hidden rounded-lg border border-border bg-card p-8 shadow-card">
              {isSubmitted ? (
                <div className="flex h-full animate-scale-in flex-col items-center justify-center py-12">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                  <p className="mb-6 text-center text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md border px-4 py-3 ${
                        errors.name ? "border-red-500" : "border-border"
                      } bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Si Fulan"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md border px-4 py-3 ${
                        errors.email ? "border-red-500" : "border-border"
                      } bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="fulan@gmail.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1 block text-sm font-medium"
                    >
                      Subject{" "}
                      <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full rounded-md border px-4 py-3 ${
                        errors.message ? "border-red-500" : "border-border"
                      } bg-background transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-white transition-all duration-300 ${
                      isSubmitting ? "opacity-80" : "hover:bg-primary/90"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Background elements */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/5"></div>
              <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-primary/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
