import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const headerOptions = [
        { name: 'Home', link: '/gomti_infra_mining' },
        { name: 'About Us', link: '/gomti_infra_mining/about' },
        { name: 'Services', link: '/gomti_infra_mining' },
        { name: 'Certificates', link: '/gomti_infra_mining' },
        { name: 'CSR Activity', link: '/gomti_infra_mining/csr-activity' },
        { name: 'Contact Us', link: '/gomti_infra_mining/contact' },
    ];

    const navigate = useNavigate();;


    return (
        <div className={styles.main_container}>
            <div
                onClick={() => {
                    navigate("/gomti_infra_mining")
                }}
                className={styles.gomti}>Gomti Infra & <span className={styles.infra}>  Mining Private Limited </span> </div>
            <div className={styles.option_container}>
                {headerOptions.map((option, index) => (
                    <div key={index}>
                        <div onClick={() => {
                            navigate(option.link);
                            window.scrollTo(0, 0)
                        }}>
                            {option.name}
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Header;
