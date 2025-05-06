import styles from "../styles";
import DropdownButton from "./dropdown-btn";

export default function FinalExpenseInsuranceForm() {
    return (
        <form className={styles.quoteForm.container}>
            <input type="text" placeholder="Full Name" className={styles.quoteForm.input} />
            <input type="date" placeholder="Date of Birth" className={styles.quoteForm.input} />
            <input type="text" placeholder="Phone Number" className={styles.quoteForm.input} />
            <input type="email" placeholder="Email" className={styles.quoteForm.input} />
            <DropdownButton label={"State"} options={[]} onSelect={() => {}} />
            <input type="number" placeholder="Zip" className={styles.quoteForm.input} />
            <DropdownButton label={"Gender"} options={[{id: 0, name: 'Male'}, {id: 1, name: "Female"}]} onSelect={() => {}} />
            <DropdownButton label={"Smoker"} options={[{id: 0, name: 'yes'}, {id: 1, name: 'no'}]} onSelect={() => {}} />
            <textarea placeholder="Comments" className={styles.quoteForm.textarea} />
            <button className={styles.quoteForm.button}>Get Instant Quote</button>
        </form>
    );
}