import React from 'react';
import truck from '../../assets/images/truck.jpg';
// import Image from 'next/image';
import styles from './Dashboard.module.css';
import kul from '../../assets/images/kul.jpeg';
import ImageWithTextContainer from '../ImageWithTextContainer/ImageWithTextContainer';
import enviornment from '../../assets/images/envior.png';
// import ImageWrapper from './ImageWrapper';

const Dashboard: React.FC = () => {
    const constainers = [
        {
            image: truck,
            heading: "Company Overview",
            text: "Gomti Infra & Mining Pvt. Ltd., we are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship.",
            link: "/gomti_infra_mining/about"
        },
        {
            image: truck,
            heading: "Our Mission",
            text: "Our mission is to be a leader in the mining industry, known for our commitment to safety, environmental responsibility, and the well-being of the communities where we operate. We strive to deliver the highest quality minerals and metals to meet the world's growing demands.",
            link: "/gomti_infra_mining/about"
        },
        {
            image: enviornment,
            heading: "CSR Activity",
            text: "We are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship.",
            link: "/gomti_infra_mining/csr-activity"
        },


    ]

    return (
        <div className={styles.jj}>


            <img src={kul} alt="Picte"
                className={styles.image_ii}
            />


            <div className={styles.text_container}>
                <div className={styles.ttext}>
                    Who We Are ?
                </div>
                <div className={styles.inner_text}>
                    <b>Gomti Infra & Mining Private Limited</b>,
                    we are dedicated to the responsible exploration and extraction
                    of the Earth's valuable resources. With a legacy dating back decades,
                    our company has been a stalwart in the mining industry, contributing to
                    global development while prioritizing sustainability and environmental
                    stewardship. <a href="/about"
                        style={{
                            textDecoration: "none"
                        }}
                    > read more...</a>
                </div>
            </div>

            <div className={styles.colo}>
                {
                    constainers.map((container, index) => (
                        <div

                        >
                            <ImageWithTextContainer
                                image={container.image}
                                heading={container.heading}
                                text={container.text}
                                link={container.link}
                            />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Dashboard;
