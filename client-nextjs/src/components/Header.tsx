import React from 'react';
import styles from '../styles/header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h3 className={styles.title}>Poc Aplicação Next.js com Typescript e Redux</h3>
        </header>
    );
};

export default Header;
