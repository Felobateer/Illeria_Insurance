import styles from "../styles";


export default function Footer() {
    return (
        <footer className={styles.footer.container}>
        <div className={styles.footer.content}>
            <p className={styles.footer.text}>© 2025 Your Company. All rights reserved.</p>
            <div className={styles.footer.socialIcons}>
                <a href="#" className={styles.footer.icon}>Facebook</a>
                <a href="#" className={styles.footer.icon}>Twitter</a>
                <a href="#" className={styles.footer.icon}>Instagram</a>
            </div>
        </div>
        </footer>
    );
}