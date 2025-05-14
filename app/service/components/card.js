'use client';
import styles from "@/app/styles";
import { useRef } from "react";
import { scrollImgAni } from "@/app/animations";

export default function ServiceCard({service, flexDirection}) {
    const imgRef = useRef(null);

    scrollImgAni(imgRef, flexDirection === "flex-row" ? "left" : "right");
    
    return (
        <div className={`${styles.card.container} ${flexDirection}`} id={service.idName}>
            <div className={styles.card.content}>
                <h2 className={styles.card.title}>{service.name}</h2>
                <p className={styles.card.description}>{service.description}</p>
            </div>
            <div className={styles.card.imageContainer}>
                <img ref={imgRef} src={service.img} alt={service.title} className={styles.card.image} />
            </div>
        </div>
    );
}
    