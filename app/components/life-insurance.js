'use client'
import styles from "../styles";
import DropdownButton from "./dropdown-btn";
import { useEffect, useState } from "react";


export default function LifeInsuranceForm() {
    const [statesList, setStatesList] = useState([]);

    useEffect(() => {
      const fetchStates = async () => {
        try {
          const res = await fetch("https://api.usa.gov/crime/fbi/sapi/api/states?api", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (res.ok) {
            const data = await res.json();
            setStatesList(data.states); // Adjust based on actual structure
          }
        } catch (err) {
          console.error("Failed to fetch states", err);
        }
      };
  
      fetchStates();
    }, []);

      const months = [
        { id: 0, name: "January" },
        { id: 1, name: "February" },
        { id: 2, name: "March" },
        { id: 3, name: "April" },
        { id: 4, name: "May" },
        { id: 5, name: "June" },
        { id: 6, name: "July" },
        { id: 7, name: "August" },
        { id: 8, name: "September" },
        { id: 9, name: "October" },
        { id: 10, name: "November" },
        { id: 11, name: "December" }
    ];

    const years = () => {
        const currentYear = new Date().getFullYear();
        const yearList = [];
        for (let i = currentYear; i >= 1900; i--) {
            yearList.push({ id: i, name: i });
        }
        return yearList;
    }

    const days = () => {
        const currentYear = new Date().getFullYear();
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const dayList = [];
        for (let i = 1; i <= daysInMonth; i++) {
            dayList.push({ id: i, name: i });
        }
        return dayList;
    }

    const healthOptions = [
        { id: 0, name: "Super Preferred" },
        { id: 1, name: "Preferred" },
        { id: 2, name: "Regular Plus" },
        { id: 3, name: "Regular" }
    ];

    const termOptions = [
        { id: 0, name: "5 Years" },
        { id: 1, name: "10 Years" },
        { id: 2, name: "15 Years" },
        { id: 3, name: "20 Years" },
        { id: 4, name: "25 Years" },
        { id: 5, name: "30 Years" }
    ];

    const amountOptions = [
        { id: 0, name: "$25,000" },
        { id: 1, name: "$50,000" },
        { id: 2, name: "$75,000" },
        { id: 3, name: "$100,000" },
        { id: 4, name: "$125,000" },
        { id: 5, name: "$150,000" },
        { id: 6, name: "$175,000" },
        { id: 7, name: "$200,000" },
        { id: 8, name: "$225,000" },
        { id: 9, name: "$250,000" },
        { id: 10, name: "$300,000" },
        { id: 11, name: "$350,000" },
        { id: 12, name: "$400,000" },
        { id: 13, name: "$450,000" },
        { id: 14, name: "$500,000" },
        { id: 15, name: "$600,000" },
        { id: 16, name: "$700,000" },
        { id: 17, name: "$750,000" },
        { id: 18, name: "$800,000" },
        { id: 19, name: "$900,000" },
        { id: 20, name: "$1 Million" },
        { id: 21, name: "$1,250,000"  },
        { id: 22, name: "$1,500,000"  },
        { id: 23, name: "$1,750,000" },
        { id: 24, name: "$2 Million" },
        { id: 25, name: "$2,500,000" },
        { id: 26, name: "$3 Million" },
        { id: 27, name: "$3,500,000" },
        { id: 28, name: "$4 Million" },
        { id: 30, name: "$5 Million" },
        { id: 31, name: "$6 Million" },
        { id: 32, name: "$7 Million" },
        { id: 33, name: "$8 Million" },
        { id: 34, name: "$9 Million" },
        { id: 35, name: "$10 Million" }
    ];

    return (
        <form className={styles.quoteForm.container}>
            <input type="text" placeholder="Full Name" className={styles.quoteForm.input} />
            <input type="email" placeholder="Email" className={styles.quoteForm.input} />
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>State:</label>
                <DropdownButton list={statesList} />
            </div>
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>D.O.B.:</label>
                <DropdownButton list={months} />
                <DropdownButton list={days()} />
                <DropdownButton list={years()} />
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
        </form>
    )
}