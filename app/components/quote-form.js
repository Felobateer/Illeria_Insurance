import styles from "../styles";
import DropdownMenu from "./dropdown-menu";
import LifeInsuranceForm from "./life-insurance";
import HealthInsuranceForm from "./health-insurance";
import FinalExpenseInsuranceForm from "./final-expense";
import MedicareSupplementForm from "./medicare-form";
import FastAutoInsuranceForm from "./auto-insurance";

export default function QuoteForm() {

    const quotes = [
        { id: 0, name: "Life Insurance"},
        { id: 1, name: "Health Insurance" },
        { id: 2, name: "Final Expense Insurance" },
        { id: 3, name: "Medicare Supplement"},
        { id: 4, name: "Fast Auto Insurance"}
    ]

    const selectedForm = (option) => {
        switch (option) {
            case option === quotes[0].name:
                return <LifeInsuranceForm />
            case option === quotes[1].name:
                return <HealthInsuranceForm />
            case option === quotes[2].name:
                return <FinalExpenseInsuranceForm />
            case option === quotes[3].name:
                return <MedicareSupplementForm />
            case option === quotes[4].name:
                return <FastAutoInsuranceForm />
            default:
                return null;
        }
    }

    return (
        <form className={styles.quoteForm.container}>
            <DropdownMenu list={quotes} />
            {selectedForm(DropdownMenu.selectedOption)}
        </form>
    );
}