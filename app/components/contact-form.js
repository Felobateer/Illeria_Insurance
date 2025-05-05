'use client'
import styles from "../styles";
import { useState } from "react";

export default function ContactForm() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    }

    return (
        <form className={styles.form.container}>
            <h2 className={styles.form.title}>Contact Us Today</h2>    
            <div className={styles.form.subcontainer}>
                <div className={styles.form.leftside}>
                    <input type="text" placeholder="Your Name" className={styles.form.input} required />
                    <input type="email" placeholder="Your Email" className={styles.form.input} required />
                    <textarea placeholder="Your Message" className={styles.form.textarea} required></textarea>
                </div>
                <div className={styles.form.rightside} onClick={handleSubmit}>
                    <button type="submit" className={styles.form.button}>Send Message</button>
                </div>
            </div>
            {success ?<p className={styles.form.description}>
                We will get back to you as soon as possible.
            </p> : null}
        </form>
    )
}