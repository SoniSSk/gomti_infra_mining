import React from 'react';
import styles from './Header.module.css';
import AboutUs from '../AboutUs/AboutUs';
// import Link from 'next/link';

const Header = () => {
    const headerOptions = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        { name: 'Operations', link: '/services' },
        { name: 'Compliances', link: '/gallery' },
        { name: 'CSR Activity', link: '/blog' },
        { name: 'Contact Us', link: '/contact' },
    ];

    return (
        <div className={styles.main_container}>
            <div>Gomti Infra Mining</div>
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
