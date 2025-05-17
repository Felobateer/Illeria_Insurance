import styles from "@/app/styles";
import { LanguageService } from "@/app/admin/translator";

export default async function Disclamer() {
    const langService = new LanguageService;
    const sourceText = await langService.getTranslatedContent();
    const content = sourceText.servicePage.extras;
    return (
        <section className={styles.aboutme.container}>
            <div className={styles.aboutme.container}>
                <h2 className={styles.about.title}>{content.disclamerTitle}</h2>
                <p className={styles.aboutme.description}>
                {content.disclamerDescription}
                </p>
            </div>
        </section>
    );
}