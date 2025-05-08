import styles from "@/app/styles";

export default function Disclamer() {
    return (
        <section className={styles.aboutme.container}>
            <div className={styles.aboutme.content}>
                <h2 className={styles.aboutme.title}>Disclaimer</h2>
                <p className={styles.aboutme.description}>
                    The information provided on this website is for general informational purposes only and should not be considered legal or financial advice. 
                    We are not responsible for any errors or omissions in the content of this site. 
                    Please consult with a qualified professional for specific advice regarding your situation.
                </p>
            </div>
        </section>
    );
}