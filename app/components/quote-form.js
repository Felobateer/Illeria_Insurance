import styles from "../styles";
import DropdownMenu from "./dropdown-menu";
import LifeInsuranceForm from "./life-insurance";
import HealthInsuranceForm from "./health-insurance";
import FinalExpenseInsuranceForm from "./final-expense";
import MedicareSupplementForm from "./medicare-form";
import FastAutoInsuranceForm from "./auto-insurance";
import { useEffect, useState } from "react";
import { quotes } from "../constants";

export default function QuoteForm() {
    

    const [selectedOption, setSelectedOption] = useState(0);

    const renderForm = () => {
        switch (selectedOption) {
            case 0:
                return <LifeInsuranceForm />;
            case 1:
                return <HealthInsuranceForm />;
            case 2:
                return <FinalExpenseInsuranceForm />;
            case 3:
                return <MedicareSupplementForm />;
            case 4:
                return <FastAutoInsuranceForm />;
            default:
                return null;
        }
    };


    return (
        <div className={styles.quoteForm.container}>
            <DropdownMenu list={quotes} onSelect={setSelectedOption} />
            {renderForm()}
        </div>
    );
}