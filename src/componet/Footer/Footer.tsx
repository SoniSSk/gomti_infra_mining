import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
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
                        <div>Home</div>
                        <div>About Us</div>
                        <div>Operations</div>
                        <div>Compliances</div>
                        <div>CSR Activity</div>
                        <div>Contact Us</div>
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