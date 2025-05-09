import styles from "@/app/styles";

export default function ServiceCard({service, flexDirection}) {
    return (
        <div className={`${styles.card.container} ${flexDirection}`} id={service.idName}>
            <div className={styles.card.content}>
                <h2 className={styles.card.title}>{service.name}</h2>
                <p className={styles.card.description}>{service.description}</p>
            </div>
            <div className={styles.card.imageContainer}>
                <img src={service.img} alt={service.title} className={styles.card.image} />
            </div>
        </div>
    );
}
    