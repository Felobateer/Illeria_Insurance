'use client';
import Image from "next/image";
import styles from "../styles";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import HorizontalScroll from "./carousel";
import DropdownMenu from "./dropdown-menu";
import { LanguageService } from "../admin/translator";

export default function InsurersAndJoin() {
    gsap.registerPlugin(useGSAP);
    const [insurNjoin, setInsurNjoin] = useState(null);
    const [formContent, setFormContent] = useState(null);

    useEffect(() => {
        async function fetchContent() {
            const langService = new LanguageService;
            const sourceText = await langService.getTranslatedContent();
            setInsurNjoin(sourceText.insurersJoin);
            setFormContent(sourceText.forms);
        }
        fetchContent();
    }, []);
    
    const insurers = [
        { id: 0, logo: "/oxford-life.jpg"},
        { id: 1, logo: "/united-american-medicare-insurance.jpg" },
        { id: 2, logo: "/humana-medicare-part-d.jpg" },
        { id: 3, logo: "/mutual-of-omaha-medicare-supplement.jpg" },
        { id: 4, logo: "/transamerica-insurance.jpg" },
        { id: 5, logo: "/dental-plans.jpg" },
        { id: 6, logo: "/united-home-life.jpg" },
    ]
    const containerRef = useRef(null);

    const insurances = [
        { id: 0, name: 'Life Insurance'},
        { id: 1, name: 'Health Insurance' },
        { id: 2, name: 'Final Expense Insurance' },
        { id: 3, name: 'Medicare Supplement' },
    ]

    if(!insurNjoin || !formContent) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.insurers.container}>
            <h1 className={styles.insurers.title}>{insurNjoin.title[0]}</h1>
            <div className={styles.insurers.subcontainer} ref={containerRef}>
            
            <HorizontalScroll insurers={insurers} />
            </div>
           <div className={styles.joinUs.container}>
                <h2 className={styles.joinUs.title}>
                    {insurNjoin.title[1]}
                </h2>
                <p className={styles.joinUs.description}>{insurNjoin.description}</p>

                <form className={styles.form.container}>
                    <div className={styles.form.subcontainer}>
                        <div className={styles.form.leftside}>
                            <input type="text" placeholder={formContent.namePlaceholder} className={styles.form.input} />
                            <input type="email" placeholder={formContent.emailPlaceholder} className={styles.form.input} />
                            <input type="tel" placeholder={formContent.messagePlaceholder} className={styles.form.input} />
                            <DropdownMenu list={insurances} />
                        </div>
                        <div className={styles.form.rightside}>
                            <button type="submit" className={styles.form.button}>{insurNjoin.button}</button>
                        </div>
                    </div>
                </form>
           </div>
        </div>
    );
}