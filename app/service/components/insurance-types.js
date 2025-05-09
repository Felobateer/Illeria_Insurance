import styles from "@/app/styles";
import ServiceCard from "./card";

export default function InsuranceTypes() {
    const insuranceTypes = [
        { id: 0, name: "Life Insurance", img: './life-insur.jpg', description: "Long-Term Care Insurance gives you the financial means and the support options you desire. Whether you require in-home visits, assisted living or skilled nursing care, Long-Term Care Insurance lifts the burden from those around you, improving the quality of life for yourself and for everyone you hold dear." },
        { id: 1, name: "Health Insurance", img: './health-insur.jpg', description: "Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured. It can also provide coverage for other types of health-related expenses, such as preventive care, prescription drugs, and mental health services." },
        { id: 2, name: "Final Expense Insurance", img: './final-expense-insur.jpg', description: "Your family will always come first. You wouldn't want them to bear huge and unexpected financial burdens at the time of your passing. No matter what your age, it's absolutely essential to have a plan in place to protect your loved ones when you are no longer able. Final Expense insurance will pay for your funeral service, bills and other associated costs."},
        { id: 3, name: "Medicare Supplement", img: './medicare-supplement.jpg', description: "Medicare by itself has a high deductible for hospital  admission for 2024 it's $1,632, and Part B $240 and it only pays 80% of eligible doctor costs. A serious illness could set you back many thousands of dollars. A Medicare Supplement or Medicare Advantage policy covers all or most out-of-pocket medical expenses providing you with peace-of-mind and potential savings. Let us guide you in sorting through the numerous Medicare options. We can also help you in choosing a Medicare prescription plan Part D that includes your specific medications."}
    ];
    return (
        <section className={styles.about.container}>
            <div className={styles.about.container}>
            <h1 className={styles.about.title}>Individual and Group Health Insurance The ACA.</h1>
            <p className={styles.about.description}>Nearly everybody is confused about their healthcare options - and rightly so. You can't rely on politicians or media reports for a clear and unbiased explanation. You want the facts, not opinions. We'd be happy to evaluate your current coverage and present you with side-by side comparisons of alternatives.</p>
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