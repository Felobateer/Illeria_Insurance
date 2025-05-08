import styles from "@/app/styles";

export default function serviceCard({service, flexDirection}) {
    return (
        <div className={`${styles.card.container} ${flexDirection}`}>
            <div className={styles.card.content}>
                <h2 className={styles.card.title}>{service.title}</h2>
                <p className={styles.card.description}>{service.description}</p>
            </div>
            <div className={styles.card.imageContainer}>
                <img src={service.image} alt={service.title} className={styles.card.image} />
            </div>
        </div>
    );
}
    