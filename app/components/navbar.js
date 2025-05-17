'use client';
import styles from "../styles"
import DropdownButton from "./dropdown-btn"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import DropdownMenu from "./dropdown-menu";
import CustomModal from "./modal";
import QuoteForm from "./quote-form";
import MobileMenu from "./mobile-menu";
import { lang } from "../constants"
import { LanguageService } from "../admin/translator";

export default function Navbar() {
    const navigate = useRouter();
    const [showQuotes, setShowQuotes] = useState(false);
    
    async function handleLanguageChange(lang) {
        const select = lang.name.toLowerCase().trim();
        console.log("language in function: ", select);
        const languageService = new LanguageService();
        await languageService.setLanguage(select);
        console.log(`Language changed to: ${lang.name}`);
        console.log("language in class: ", languageService.lang);
    }

    return (
        <nav className={styles.navbar.container}>
                <div className={styles.navbar.logo} onClick={() => navigate.push('/')}>
                    <img src="/logo.jpg" alt="Logo" className={styles.navbar.logoImg} />
                    <p className={styles.navbar.logoText}>Lighthouse Financial Services</p>
                </div>
                <ul className={styles.navbar.navLinks}>
                    <li className={styles.dropdown.container}>
                        <button onClick={() => navigate.push('/')} className={styles.dropdown.button}>Home
                            </button></li>
                    <li className={styles.dropdown.container}>
                        <button onClick={() => navigate.push('/#about')} className={styles.dropdown.button}>About
                            </button></li>
                    <li className={styles.dropdown.container}>
                        <button onClick={() => navigate.push('/#contact')} className={styles.dropdown.button}>Contact
                            </button></li>
                    <li className={styles.dropdown.container}>
                        <button onClick={() => navigate.push('/service')} className={styles.dropdown.button}>Services
                            </button></li>
                    <li className={styles.dropdown.container}>
                        <button className={styles.navbar.button} onClick={() => {setShowQuotes(!showQuotes); console.log(showQuotes)}}>
                            Free Quotes
                        </button></li>
                    <DropdownMenu list={lang} onSelect={(select) => handleLanguageChange(select)} />
                </ul>

                <CustomModal isOpen={showQuotes} onClose={() => setShowQuotes(false)}>
                        <QuoteForm />
                </CustomModal>
                <MobileMenu lang={lang} />
        </nav>
    )
}