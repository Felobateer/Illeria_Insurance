'use client'
import styles from "../styles";
import ContactForm from "./contact-form";
import DropdownMenu from "./dropdown-menu";
import CustomModal from "./modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();
    const [showContact, setShowContact] = useState(false);


    return (
        <footer className={styles.footer.container}>
        <div className={styles.footer.content}>
            <p className={styles.footer.text}>copyright © 2025 Wagdy Saadalla (David). All rights reserved.</p>
            <div className={styles.footer.socialIcons}>
                <a href="#" className={styles.footer.icon}>Member Login</a>
                <a href="#" className={styles.footer.icon} onClick={() => router.push('/privacy-policy')}>Privacy Policy</a>
                <button href="#" onClick={() => setShowContact(!showContact)} className={styles.footer.icon}>Contact</button>
                <CustomModal isOpen={showContact} onClose={() => setShowContact(false)}>
                    <ContactForm />
                </CustomModal>
                
            </div>
        </div>
        </footer>
    );
}