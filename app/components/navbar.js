import styles from "../styles"

export default function Navbar() {

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
                </ul>
        </nav>
    )
}