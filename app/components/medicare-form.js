import styles from "../styles";

export default function MedicareSupplementForm() {
    const age = [
        { id: 0, name: "Under 65" },
        ...Array.from({ length: 35 }, (_, i) => ({
          id: i + 1,
          name: (i + 65).toString(),
        }))
      ];

    return (
        <form className={styles.quoteForm.container}>
            <input type="number" placeholder="Zip" className={styles.quoteForm.input} />
            <div className={styles.quoteForm.inputGroup}>
                <label className={styles.quoteForm.label}>Age:</label>
                <DropdownButton list={age} />
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
            <button className={styles.quoteForm.button}>Get Instant Quote</button>
        </form>
    )
}