'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles";
import DropdownMenu from "./dropdown-menu";
import CustomModal from "./modal";
import QuoteForm from "./quote-form"; // ✅ import this

export default function MobileMenu({ lang }) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [showQuotes, setShowQuotes] = useState(false); // ✅ added state

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.mobileMenu.container} ${isOpen ? styles.mobileMenu.containerActive : ''}`}>
            <button onClick={toggleMenu} className={styles.mobileMenu.button}>
                <img src={isOpen ? '/x-solid.svg' : '/bars-solid.svg'} alt="Menu" className={styles.mobileMenu.icon} />
            </button>

            <div className={`${styles.mobileMenu.panel} ${isOpen ? styles.mobileMenu.panelActive : ''}`}>
                <ul className={styles.mobileMenu.navLinks}>
                        <li className={styles.mobileMenu.listItem}>
                            <button onClick={() => router.push('/')} className={styles.mobileMenu.btn}>Home</button>
                        </li>
                        <li className={styles.mobileMenu.listItem}>
                            <button onClick={() => router.push('/#about')} className={styles.mobileMenu.btn}>About</button>
                        </li>
                        <li className={styles.mobileMenu.listItem}>
                            <button onClick={() => router.push('/#contact')} className={styles.mobileMenu.btn}>Contact</button>
                        </li>
                        <li className={styles.mobileMenu.listItem}>
                            <button onClick={() => router.push('/service')} className={styles.mobileMenu.btn}>Services</button>
                        </li>
                        <li className={styles.mobileMenu.listItem}>
                            <button className={styles.navbar.button} onClick={() => setShowQuotes(!showQuotes)}>
                                Free Quotes
                            </button>
                        </li>
                        <DropdownMenu list={lang} />
                    </ul>

                    <CustomModal isOpen={showQuotes} onClose={() => setShowQuotes(false)}>
                        <QuoteForm />
                    </CustomModal>
                </div>
        </div>
    );
}
