'use client';
import styles from "../styles"
import DropdownButton from "./dropdown-btn"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import DropdownMenu from "./dropdown-menu";


export default function Navbar() {
    const navigate = useRouter();


    const services = [
        { id: 0, name: "Medicare Plan", link: "/service/mdc-plan" },
        { id: 1, name: "Support Securing", link: "/service/support-securing" },
        { id: 2, name: "Guidance Navigating", link: "/service/guidance-navigating" },
        { id: 3, name: "In-Network Provider", link: "/service/in-network-provider" },
    ];

    const lang = [
        {id: 0, name: 'EN'},
        {id: 1, name: 'ES'},
        {id: 2, name: 'AR'},
        {id: 3, name: 'HI'},
        {id: 4, name: 'UR'},
        {id: 5, name: 'GU'},
        {id: 6, name: 'PA'},
    ]

    const handleSelect = (option) => {
        navigate.push(option.link);
    }

    return (
        <nav className={styles.navbar.container}>
                <div className={styles.navbar.logo}>Illeria Insurance</div>
                <ul className={styles.navbar.navLinks}>
                    <li className={styles.navbar.link}>
                        <a href="#" className={styles.navbar.link}>Home
                            </a></li>
                    <li className={styles.navbar.link}>
                        <a href="#" className={styles.navbar.link}>About
                            </a></li>
                    <li className={styles.navbar.link}>
                        <a href="#" className={styles.navbar.link}>Contact
                            </a></li>
                    <li>
                        <DropdownButton label={"Services"} options={services} onSelect={() => handleSelect(option)} />
                    </li>
                    <button className={styles.navbar.button}>
                        Free Quotes
                    </button>
                    <DropdownMenu list={lang} />
                </ul>
        </nav>
    )
}