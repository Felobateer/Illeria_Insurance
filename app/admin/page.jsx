'use client';
import React, { useState, useEffect } from "react";
import styles from "../styles";
import content from "../content.json";


export default function AdminPage() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (message !== null) {
            const timer = setTimeout(() => setMessage(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleSubmit = async (e, section) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        try {
            await  fetch(`/api/updateContent/${section}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }).then((res) => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            }
            )
            setMessage("Content updated successfully!");
        } catch (error) {
            console.error("Error writing file:", error);
            setMessage("Error updating content.");
        }    
    }


    return (
        <section className={styles.admin.container}>
            <h2 className={styles.admin.title}>
                Admin Page
            </h2>
            {/* Hero Section */}
            <div className={styles.admin.formContainer}>
                <h3 className={styles.admin.formTitle}>Hero Section</h3>
                <form className={styles.admin.form} onSubmit={(e) => handleSubmit(e, 'hero')}>
                    <div className={styles.admin.formGroup}>
                        <label className={styles.admin.label} htmlFor="name" >Title</label>
                        <input className={styles.admin.input} placeholder={content.hero.title} type="text" id="name" name="name" defaultValue={content.hero.title} />
                    </div>

                    <div className={styles.admin.formGroup}>
                        <label className={styles.admin.label} htmlFor="subtitle">Subtitle</label>
                        <input className={styles.admin.input} placeholder={content.hero.subtitle} type="text" id="subtitle" name="subtitle" defaultValue={content.hero.subtitle}  />
                    </div>

                    <div className={styles.admin.formGroup}>
                        <label className={styles.admin.label} htmlFor="btn-label">Button</label>
                        <input className={styles.admin.input} placeholder={content.hero.button} id="Button" name="Button" defaultValue={content.hero.button} />
                    </div>

                    <div className={styles.admin.formFooter}>
                        {<p className={styles.admin.formFooterText}>
                            {message}
                        </p>}
                        <button className={styles.admin.button} type="submit">Save</button>
                    </div>

                </form>
            </div>
            
        </section>
    )
}