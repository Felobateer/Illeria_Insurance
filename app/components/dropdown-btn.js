import styles from '../styles';
import { useState } from 'react';
export default function DropdownButton({ label, list, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const selectOption = (option, e) => {
        e.preventDefault();
        setSelectedOption(option.id);
        setIsOpen(false);
        onSelect?.(option.name);
    }

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.dropdown.container}>
        <button className={styles.dropdown.button} onClick={() => toggleDropdown(event)}>
            {list[selectedOption] || label}
        </button>
        {isOpen ?<ul className={styles.dropdown.menu}>
            {list.map((option, index) => (
            <li key={index} className={styles.dropdown.item} onClick={() => onSelect(option)}>
                <button className={styles.dropdown.itembtn} onClick={(e) => selectOption(option, e)}>
                    {option.name}
                </button>
            </li>
            ))}
        </ul> : null}
        </div>
    );
}