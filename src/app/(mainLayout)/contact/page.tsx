"use client";

import React, { FormEvent, useEffect } from "react";
import styles from "./contact.module.css";
import { useRouter } from "next/navigation";

const ContactUsPage: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>
        Thank you for visiting our Blog Application! If you have any questions,
        suggestions, or simply wish to connect, feel free to reach out.
      </p>
      <div className={styles.ownerInfo}>
        <h2>Owner Details:</h2>
        <p>
          <strong>Name:</strong> Vaishnavi Karil
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:vaishnavikaril@gmail.com">vaishnavikaril@gmail.com</a>
        </p>
      </div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message here..."
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
