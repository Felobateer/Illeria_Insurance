"use client";
import styles from "../styles";
import ContactForm from "./contact-form";
import { useRef, useEffect, useState } from "react";
import { scrollImgAni } from "../animations";
import { LanguageService } from "../admin/translator";


export default function GetInTouch() {
    const imgRef = useRef(null);
    const [contactContent, setContactContent] = useState(null); 

    
    useEffect(() => {
        async function fetchContent() {
            const langService = new LanguageService;
            const sourceText = await langService.getTranslatedContent();
            setContactContent(sourceText.contact);
        }
        fetchContent();
        scrollImgAni(imgRef, "right");
    }, []);

    if(!contactContent) {
        return <p>Loading...</p>
    }
    
    return (
        <section className={styles.contact.container} id="contact">
                <h1 className={styles.contact.title}>{contactContent.title}</h1>
            <div className={styles.contact.subcontainer}>
                <div className={styles.contact.leftside}>
                    <img ref={imgRef} src="/contact.jpg" alt="Contact Us" className={styles.contact.img} />
                </div>
                <div className={styles.contact.rightside}>
                    <div className={styles.contact.rightside}>
                        <h2 className={styles.contact.subtitle}>{contactContent.subtitle[0]}</h2>
                        <p className={styles.contact.text}>{contactContent.office-number}</p>
                        <p className={styles.contact.text}>{contactContent.cell-number}</p>
                        <h2 className={styles.contact.subtitle}>{contactContent.subtitle[1]}</h2>
                        <p className={styles.contact.text}>{contactContent.weekdays}</p>
                        <p className={styles.contact.text}>{contactContent.weekends}</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}