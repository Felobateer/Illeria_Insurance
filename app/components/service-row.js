'use client';
import styles from "../styles";
import { useRouter } from "next/navigation";
import { services } from '../constants'
import { useState, useEffect } from 'react'
import { LanguageService } from "../admin/translator";

export default function ServiceRow() {
    const router = useRouter();
    const [serviceTitle, setServiceTitle] = useState(null);

    useEffect(() => {
            async function fetchContent() {
                const langService = new LanguageService;
                const sourceText = await langService.getTranslatedContent();
                setServiceTitle(sourceText.serviceRow.Title)
            }
            fetchContent();
        }, []);

    return (
        <section className={styles.service.container}>
            <h2 className={styles.service.title}>
                {serviceTitle ? serviceTitle : 'Loading...'}
            </h2>

            <div className={styles.service.flex}>
                {services.map((service, index) => (
                    <button onClick={() => router.push(service.link)} key={index} className={`${styles.service.card} ${styles.service.hoverEffect}`}>
                        <h3 className={styles.service.cardTitle}>{service.title}</h3>
                        <p className={styles.service.cardDescription}>{service.description}</p>
                    </button>
                ))}
            </div>
        </section>
    );
}