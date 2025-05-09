import styles from "../styles";
import ContactForm from "./contact-form";

export default function GetInTouch() {
    return (
        <section className={styles.contact.container} id="contact">
                <h1 className={styles.contact.title}>Get In Touch</h1>
            <div className={styles.contact.subcontainer}>
                <div className={styles.contact.leftside}>
                    <img src="/contact.jpg" alt="Contact Us" className={styles.contact.img} />
                </div>
                <div className={styles.contact.rightside}>
                    <div className={styles.contact.rightside}>
                        <h2 className={styles.contact.subtitle}>Contact Information</h2>
                        <p className={styles.contact.text}>Office: 201-218-2688</p>
                        <p className={styles.contact.text}>Cell: 201-218-2688</p>
                        <h2 className={styles.contact.subtitle}>Agency Hours</h2>
                        <p className={styles.contact.text}>Weekdays: 9:00 AM - 5:00 PM</p>
                        <p className={styles.contact.text}>Weekends: closed</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}