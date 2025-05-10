import styles from "../styles";
import DropdownButton from "./dropdown-btn";

export default function FastAutoInsuranceForm() {
    const inquiryOptions = [
        "Currently Insured, need savings",
        "Currently insured, just curious",
        "Uninsured, need coverage",
        "Uninsured, just curious",
    ];

    return (
        <form className={styles.quoteForm.container}>
            <h2>Fast Auto Insurance Quote</h2>
            <input type="text" placeholder="Full Name" className={styles.quoteForm.input} />
            <input type="email" placeholder="Email" className={styles.quoteForm.input} />
            <input className={styles.quoteForm.input} type="text" placeholder="Enter Your Zip Code" required />
            <DropdownButton label={"How can We Help You?"} options={inquiryOptions} onSelect={() => {}} />
            <button type="submit">Get Instant Quote</button>
        </form>
    );
}