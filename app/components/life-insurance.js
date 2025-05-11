'use client'
import styles from "../styles";
import DropdownButton from "./dropdown-btn";
import { useEffect, useState } from "react";
import { us_states, months, years, days, healthOptions, termOptions, amountOptions } from "../constants";
import DropdownMenu from "./dropdown-menu";


export default function LifeInsuranceForm() {
    const [info, setInfo] = useState({
        name: '', email: '', state: '', dob: { month: '', day: '', year: '' }, gender: '', smoke: '', health: '', term: '', amount: ''
    });
    const [apiRes, setApiRes] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info);
        fetch(`/api/life`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }).then((res) => {
            setApiRes(res.status);
            return res.json();
        })
    }
    

    return (
        <form className={styles.quoteForm.container}>
            <input type="text" placeholder="Full Name" className={styles.quoteForm.input} />
            <input type="email" placeholder="Email" className={styles.quoteForm.input} />
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>State:</label>
                <DropdownMenu list={us_states} />
            </div>
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>D.O.B.:</label>
                <DropdownButton label={'Month'} list={months} onSelect={() => {}} />
                <DropdownButton label={'Day'} list={days()}  onSelect={() => {}} />
                <DropdownButton label={'Year'} list={years()}  onSelect={() => {}} />
            </div>
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>Gender:</label>
                <select className={styles.quoteForm.select}>Male</select>
                <select className={styles.quoteForm.select}>Female</select>
            </div>
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>Smoke?:</label>
                <select className={styles.quoteForm.select}>Yes</select>
                <select className={styles.quoteForm.select}>No</select>
            </div>
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>Health:</label>
                <DropdownButton list={healthOptions} />
            </div>
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>Term:</label>
                <DropdownButton list={termOptions} />
            </div>
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>Amount:</label>
                <DropdownButton list={amountOptions} />
            </div>
            <button className={styles.quoteForm.button}>Get Instant Quote</button>
            {apiRes && <div className={styles.quoteForm.apiResponse}>{apiRes}</div>}
        </form>
    )
}