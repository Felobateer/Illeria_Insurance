import styles from '../styles';
import { useState } from 'react';
export default function DropdownButton({ label, options, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.dropdown.container}>
        <button className={styles.dropdown.button} onClick={toggleDropdown}>
            {label}
        </button>
        {isOpen ?<ul className={styles.dropdown.menu}>
            {options.map((option, index) => (
            <li key={index} className={styles.dropdown.item} onClick={() => onSelect(option)}>
                {option.name}
            </li>
            ))}
        </ul> : null}
        </div>
    );
}