import React, { useState } from 'react';
import styles from '../styles';

const DropdownMenu = ({props}) => {
    const [isOpen, setIsOpen] = useState(false);

    const list = props.list || [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.dropdown.container}>
            <button onClick={toggleMenu} className={styles.dropdown.button}>
                {list[0].name} <span className={arrow}>{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <ul className={styles.dropdown.menu}>
                    {list.map((item) => (
                        <li key={item.id} className={styles.dropdown.item}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;