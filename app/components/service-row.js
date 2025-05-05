import styles from "../styles";

export default function ServiceRow() {
    const services = [
        {
            title: 'Life Insurance',
            description: 'Protect your loved ones with our comprehensive life insurance plans.'
        }, {
            title: 'Health Insurance',
            description: 'Protect your health with our affordable health insurance options.'
        }, {
            title: 'Final Expense Insurance',
            description: 'Protect your family from unexpected expenses with our final expense insurance.'
        }, {
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
                    <div key={index} className={styles.service.card}>
                        <h3 className={styles.service.cardTitle}>{service.title}</h3>
                        <p className={styles.service.cardDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}