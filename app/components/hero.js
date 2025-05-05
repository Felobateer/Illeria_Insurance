import styles from "../styles";

export default function Hero() {

    return (
        <section className={styles.hero.container}>
      <img src='/hero.jpg' alt="Hero Image" className={styles.hero.img} />
      <div className={styles.hero.shade}></div>
      <div className={styles.hero.subcontainer}>
        <div className={styles.hero.subshade}></div>
        <div className={styles.hero.content}>
        <h1 className={styles.hero.title}>Wagdy Saadalla</h1>
        <p className={styles.hero.description}>
          Licensed Representative in the following states: AZ, CA. DE, FL, LA, NJ, NY, PA &TX.
        </p>
        <button className={styles.hero.button}>
          <i className="fas fa-download"></i> Complete Guide to Securing Your Retirement - Free eBook
        </button>
        </div>
      </div>
    </section>
    )
}