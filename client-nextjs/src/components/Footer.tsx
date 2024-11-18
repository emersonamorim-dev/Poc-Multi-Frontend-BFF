import React from 'react';
import styles from '../styles/footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <h4 className={styles.footerTitle}>© 2024 Desenvolvido por: Emerson Amorim</h4>
        </footer>
    );
};

export default Footer;
