'use client';
import styles from "../styles";
import { useRouter } from "next/navigation";

export default function ServiceRow() {
    const router = useRouter();
    const services = [
        {
            link: '/service#life',
            title: 'Life Insurance',
            description: 'Protect your loved ones with our comprehensive life insurance plans.'
        }, {
            link: '/service#health',
            title: 'Health Insurance',
            description: 'Protect your health with our affordable health insurance options.'
        }, {
            link: '/service#final-expense',
            title: 'Final Expense Insurance',
            description: 'Protect your family from unexpected expenses with our final expense insurance.'
        }, {
            link: '/service#medicare',
            title: 'Medicare Supplement',
            description: "Medicare by itself has a high deductible for hospital  admission for 2024 it's $1,632, and Part B $240 and it only pays 80% of eligible doctor costs."
        }
    ];

    return (
        <section className={styles.service.container}>
            <h2 className={styles.service.title}>
                Our Insurance Services
            </h2>

            <div className={styles.service.flex}>
                {services.map((service, index) => (
                    <button onClick={() => router.push(service.link)} key={index} className={`${styles.service.card} ${styles.service.hoverEffect}`}>
                        <h3 className={styles.service.cardTitle}>{service.title}</h3>
                        <p className={styles.service.cardDescription}>{service.description}</p>
                    </button>
                ))}
            </div>
        </section>
    );
}