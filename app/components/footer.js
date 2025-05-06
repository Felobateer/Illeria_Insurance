import styles from "../styles";


export default function Footer() {
    return (
        <footer className={styles.footer.container}>
        <div className={styles.footer.content}>
            <p className={styles.footer.text}>copyright © 2025 Wagdy Saadalla (David). All rights reserved.</p>
            <div className={styles.footer.socialIcons}>
                <a href="#" className={styles.footer.icon}>Member Login</a>
                <a href="#" className={styles.footer.icon}>Privacy Policy</a>
                <a href="#" className={styles.footer.icon}>Contact</a>
            </div>
        </div>
        </footer>
    );
}