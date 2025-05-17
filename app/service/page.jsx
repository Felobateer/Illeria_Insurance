import styles from "../styles";
import HeroSection from "./components/hero";
import InsuranceTypes from "./components/insurance-types";
import Disclamer from "./components/disclamer";
import { LanguageService } from "../admin/translator";

export default async function ServicePage() {
    const langService = new LanguageService;
  const sourceText = await langService.getTranslatedContent();
  const content = sourceText.servicePage.description;
    return (
        <main>
            <HeroSection />
            <div className={styles.aboutme.container}>
            <p className={styles.about.description}>{content[0]}</p>
            <p className={styles.about.description}>{content[1]}</p>
            <p className={styles.about.description}>{content[2]}</p>
            </div>
            <InsuranceTypes />
            <Disclamer />
        </main>
    );
}