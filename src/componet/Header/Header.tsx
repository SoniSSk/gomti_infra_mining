import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    const headerOptions = [
        { name: 'Home', link: '/gomti_infra_mining' },
        { name: 'About Us', link: '/gomti_infra_mining/about' },
        { name: 'Services', link: '/gomti_infra_mining/services' },
        { name: 'Certificates', link: '/gomti_infra_mining/certificate' },
        { name: 'CSR Activity', link: '/gomti_infra_mining/csr-activity' },
        { name: 'Contact Us', link: '/gomti_infra_mining/contact' },
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
