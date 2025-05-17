import styles from "@/app/styles";
import ServiceCard from "./card";
import { LanguageService } from "@/app/admin/translator";

export default async function InsuranceTypes() {
    const langService = new LanguageService;
    const sourceText = await langService.getTranslatedContent();
    const content = sourceText.servicePage;
    const insurances = sourceText.serviceRow.types;

    const insuranceTypes = [
        { id: 0, idName: 'life', name: insurances[0].title, img: './life-insur.jpg', description: insurances[0].FullDescription },
        { id: 1, idName: 'health', name: insurances[1].title, img: './health-insur.jpg', description: insurances[1].FullDescription },
        { id: 2, idName: 'final-expense',name: insurances[2].title, img: './final-expense-insur.jpg', description: insurances[2].FullDescription},
        { id: 3, idName: 'medicare', name: insurances[3].title, img: './medicare-supplement.jpg', description: insurances[3].FullDescription }
    ];

    return (
        <section className={styles.about.container}>
            <div className={styles.about.container}>
            <h1 className={styles.about.title}>{content.extras.mainSectionTitle}</h1>
            <p className={styles.about.description}>{content.extras.mainSectionDescription}</p>
            </div>
            <div className={styles.about.container}>
                {
                    insuranceTypes.map((type, index) => (
                        <ServiceCard key={type.id} service={type} flexDirection={index % 2 === 0 ? styles.card.flexRow : styles.card.flexRowReverse} />
                    ))
                }
            </div>
        </section>
    );
}