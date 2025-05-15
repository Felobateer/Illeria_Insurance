'use client';
import styles from "../styles";
import { useRouter } from "next/navigation";
import { services } from '../constants'

export default function ServiceRow() {
    const router = useRouter();
    

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