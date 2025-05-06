import styles from "../styles";
import DropdownButton from "./dropdown-btn";

export default function HealthInsuranceForm() {
    return (
        <form className={styles.quoteForm.container}>
            <input type="text" placeholder="Full Name" className={styles.quoteForm.input} />
            <input type="date" placeholder="Date of Birth" className={styles.quoteForm.input} />
            <input type="text" placeholder="Phone Number" className={styles.quoteForm.input} />
            <input type="email" placeholder="Email" className={styles.quoteForm.input} />
            <DropdownButton label={"State"} options={[]} onSelect={() => {}} />
            <input type="number" placeholder="Zip" className={styles.quoteForm.input} />
            <input type="text" placeholder="Household Size" className={styles.quoteForm.input} />
            <input type="text" placeholder="Household Income" className={styles.quoteForm.input} />
            <textarea placeholder="Comments" className={styles.quoteForm.textarea} />
            <p className={styles.quoteForm.privacy}>
            As per ACA(Affordable Care Act) regulations, plan pricing and availability will be determined by your household size & household income as it relates to the FPL(federal poverty level) Chart.
            </p>
            <button className={styles.quoteForm.button}>Get Instant Quote</button>
        </form>
    );
}