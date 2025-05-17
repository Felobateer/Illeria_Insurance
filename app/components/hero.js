import styles from "../styles";
import { LanguageService } from "../admin/translator";

export default async function Hero() {
  const langService = new LanguageService;
  const sourceText = await langService.getTranslatedContent();
  const content = sourceText.hero;


    return (
        <section className={styles.hero.container}>
      <img src='/hero.jpg' alt="Hero Image" className={styles.hero.img} />
      <div className={styles.hero.shade}></div>
      <div className={styles.hero.subcontainer}>
        <div className={styles.hero.subshade}></div>
        <div className={styles.hero.content}>
        <h1 className={styles.hero.title}>{content.title}</h1>
        <p className={styles.hero.description}>
          {content.subtitle}
        </p>
        <button className={styles.hero.button}>
          {content.button}
        </button>
        </div>
      </div>
    </section>
    )
}