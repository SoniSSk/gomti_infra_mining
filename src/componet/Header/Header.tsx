import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    const headerOptions = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Certificates', link: '/certificate' },
        { name: 'CSR Activity', link: '/csr-activity' },
        { name: 'Contact Us', link: '/contact' },
    ];

    return (
        <div className={styles.main_container}>
            <div>Gomti Infra & Mining</div>
            <div className={styles.option_container}>
                {headerOptions.map((option, index) => (
                    <div key={index}>
                        <a href={option.link}>
                            {option.name}
                        </a>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Header;
