'use client'
import styles from "../styles";
import ContactForm from "./contact-form";
import DropdownMenu from "./dropdown-menu";
import CustomModal from "./modal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LanguageService } from "../admin/translator";

export default function Footer() {
    const router = useRouter();
    const [showContact, setShowContact] = useState(false);
    const [footerContent, setFooterContent] = useState(null);

    useEffect(() => {
        async function fetchContent() {
            const langService = new LanguageService;
            const sourceText = await langService.getTranslatedContent();
            setFooterContent(sourceText.footer);
        }
        fetchContent();
    }, []);

    if(!footerContent) {
        return <p>Loading...</p>
    }

    return (
        <footer className={styles.footer.container}>
        <div className={styles.footer.content}>
            <p className={styles.footer.text}>{footerContent.description}</p>
            <div className={styles.footer.socialIcons}>
                <a href="#" className={styles.footer.icon}>{footerContent.links[0]}</a>
                <a href="#" className={styles.footer.icon} onClick={() => router.push('/privacy-policy')}>{footerContent.links[1]}</a>
                <button href="#" onClick={() => setShowContact(!showContact)} className={styles.footer.icon}>{footerContent.links[2]}</button>
                <CustomModal isOpen={showContact} onClose={() => setShowContact(false)}>
                    <ContactForm />
                </CustomModal>
                
            </div>
        </div>
        </footer>
    );
}