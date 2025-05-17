import styles from "../styles";
import { LanguageService } from "../admin/translator";

export default async function PolicyPage() {
    const langService = new LanguageService;
    const sourceText = await langService.getTranslatedContent();
    const content = sourceText.privacyPolicy;
    return (
        <div className={styles.footer.policyContent}>
        <h2 className={styles.footer.title}>{content.title}</h2>
        <p className={styles.footer.description}>
        {content.description[0]}
        <br />
        {content.description[1]}
        <br />
        {content.description[2]}
        <br />
        {content.description[3]}
        <br />
        {content.description[4]}
        <br />
        {content.description[5]}
        <br />
        {content.description[6]}
        <br />
        {content.description[7]}
        <a href="https://www.inwebsitebuilder.com/directory" className={styles.aboutme.highlight}> {content.links[0]}</a>, 
        <a href="https://www.inwebsitebuilder.com/florida/directory" className={styles.aboutme.highlight}> {content.links[1]}</a>,
        <a href="https://www.inwebsitebuilder.com/website/directory" className={styles.aboutme.highlight}> {content.links[2]}</a>
        </p>
    </div> 
    );
}