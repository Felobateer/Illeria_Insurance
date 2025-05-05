import styles from "../styles";

export default function GetInTouch() {
    return (
        <section className={styles.contact.container}>
            <div className={styles.contact.subcontainer}>
                <h1 className={styles.contact.title}>Get In Touch</h1>
                <p className={styles.contact.description}>
                    If you have any questions or would like to learn more about our services, please feel free to reach out to us.
                </p>
                <button className={styles.contact.button}>Contact Us</button>
            </div>
        </section>
    )
}