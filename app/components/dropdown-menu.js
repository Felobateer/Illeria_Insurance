import React, { useState } from 'react';
import styles from '../styles';

const DropdownMenu = ({ list }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = list || [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
    ];

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false); 
    }

    return (
        <div className={styles.dropdown.container}>
            <button onClick={toggleMenu} className={styles.dropdown.button}>
                {selectedOption || options[0].name} <span className={styles.dropdown.arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <ul className={styles.dropdown.menu}>
                    {options.map((item) => (
                        <li key={item.id} className={styles.dropdown.item}>
                            
                            <button onClick={() => handleSelect(item.name)} className={styles.dropdown.itembtn}> 
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;