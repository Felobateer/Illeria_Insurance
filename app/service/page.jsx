import styles from "../styles";
import HeroSection from "./components/hero";
import InsuranceTypes from "./components/insurance-types";
import Disclamer from "./components/disclamer";

export default function ServicePage() {
    return (
        <main>
            <HeroSection />
            <div className={styles.aboutme.container}>
            <p className={styles.about.description}>The insurance industry includes hundreds of different companies hoping to earn your business. It is a very competitive market and it pays to shop around for the very best deals. This is where we come in.</p>
            <p className={styles.about.description}>Whether you're searching for Life Insurance, Annuities, IRA's and other retirement strategies, Health Insurance or 'ObamaCare' or Medicare, you must be well-informed and well-advised to get the most out of your premium dollars. An experienced and independent agent who represents multiple insurance carriers can make a huge difference in what you pay for coverage.</p>
            <p className={styles.about.description}>Please don't hesitate to call us with your questions no matter whether you are already a valued customer, a potential client or if you simply need expert advice. There will never be a charge for our assistance or for a friendly, no-obligation chat.</p>
            </div>
            <InsuranceTypes />
            <Disclamer />
        </main>
    );
}