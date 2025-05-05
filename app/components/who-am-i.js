import styles from "../styles";

export default function credentials() {

    return (
        <section className={styles.hero.container}>
            <div className={styles.hero.subcontainer}>
                <div className={styles.hero.content}>
                    <h1 className={styles.hero.title}>Who Am I?</h1>
                    <p className={styles.hero.description}>
                        I am a licensed insurance agent with over 20 years of experience in the industry. I specialize in helping clients find the best insurance solutions for their needs.
                    </p>
                </div>
            </div>
        </section>
    )
}