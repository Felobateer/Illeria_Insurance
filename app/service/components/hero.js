import styles from '../../styles';
import { LanguageService } from '@/app/admin/translator';

export default async function HeroSection() {
  const langService = new LanguageService;
  const sourceText = await langService.getTranslatedContent();
  const title = sourceText.servicePage.title;

    return (
        <section className={styles.hero.container}>
        <img src='/service-hero.jpg' alt="Hero Image" className={styles.hero.img} />
        <div className={styles.hero.shade}></div>
        <div className={styles.card.subcontainer}>
          <h1 className={styles.hero.title}>{title}</h1>
        </div>
      </section>
    );
}