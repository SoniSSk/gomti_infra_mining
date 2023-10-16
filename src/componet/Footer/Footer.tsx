import React from 'react'
import styles from './Footer.module.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const footerOption = [
        { name: 'Home', link: '/gomti_infra_mining' },
        { name: 'About Us', link: '/gomti_infra_mining/about' },
        { name: 'Services', link: '/gomti_infra_mining/services' },
        { name: 'Certificates', link: '/gomti_infra_mining/certificate' },
        { name: 'CSR Activity', link: '/gomti_infra_mining/csr-activity' },
        { name: 'Contact Us', link: '/gomti_infra_mining/contact' },
    ];
    const navigate = useNavigate();
    return (
        <div className={styles.main}>
            <div className={styles.section1}>
                <div className={styles.company_name}>Gomti Infra & Mining Private  Limited</div>
                <div className={styles.text}>
                    gomtiinfra2001@gmail.com
                </div>
                <div className={styles.divider}></div>
                <div className={styles.text}> Copyright Dotcreativemarket  </div>
            </div>
            <div>
                <div>
                    <div className={styles.second_heading}>Sitemap
                    </div>
                    <div className={styles.sitemap_container}>
                        {
                            footerOption.map((item, index) => {
                                return (
                                    <div onClick={() => {
                                        navigate(item.link);
                                        window.scrollTo(0, 0)
                                    }}>
                                        {item.name}
                                    </div>

                                )
                            }
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className={styles.second_heading}>Contact</div>
                    <div className={styles.text}>Email:- gomtiinfra2001@gmail.com</div>
                    <div className={styles.text}>Mobile:- +91-9648322001, +91-9648922001</div>
                </div>

            </div>

        </div>
    )
}


export default Footer