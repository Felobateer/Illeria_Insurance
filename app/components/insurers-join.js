'use client';
import Image from "next/image";
import styles from "../styles";
import { use, useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import HorizontalScroll from "./carousel";
import DropdownMenu from "./dropdown-menu";


export default function InsurersAndJoin() {
    gsap.registerPlugin(useGSAP);
    
    const insurers = [
        { id: 0, logo: "/oxford-life.jpg"},
        { id: 1, logo: "/united-american-medicare-insurance.jpg" },
        { id: 2, logo: "/humana-medicare-part-d.jpg" },
        { id: 3, logo: "/mutual-of-omaha-medicare-supplement.jpg" },
        { id: 4, logo: "/transamerica-insurance.jpg" },
        { id: 5, logo: "/dental-plans.jpg" },
        { id: 6, logo: "/united-home-life.jpg" },
    ]
    const containerRef = useRef(null);

    const insurances = [
        { id: 0, name: 'Life Insurance'},
        { id: 1, name: 'Health Insurance' },
        { id: 2, name: 'Final Expense Insurance' },
        { id: 3, name: 'Medicare Supplement' },
    ]

    return (
        <div className={styles.insurers.container}>
            <h1 className={styles.insurers.title}>We're proud to represent insurers such as:</h1>
            <div className={styles.insurers.subcontainer} ref={containerRef}>
            
            <HorizontalScroll insurers={insurers} />
            </div>
           <div className={styles.joinUs.container}>
                <h2 className={styles.joinUs.title}>
                    Ready to get started?
                </h2>
                <p className={styles.joinUs.description}>Fill out our quick form to get a personalized insurance quote today.</p>

                <form className={styles.form.container}>
                    <div className={styles.form.subcontainer}>
                        <div className={styles.form.leftside}>
                            <input type="text" placeholder="Full Name" className={styles.form.input} />
                            <input type="email" placeholder="Email" className={styles.form.input} />
                            <input type="tel" placeholder="Phone Number" className={styles.form.input} />
                            <DropdownMenu list={insurances} />
                        </div>
                        <div className={styles.form.rightside}>
                            <button type="submit" className={styles.form.button}>Submit</button>
                        </div>
                    </div>
                </form>
           </div>
        </div>
    );
}