import React from 'react';
import truck from '../../assets/images/truck.jpg';
// import Image from 'next/image';
import styles from './Dashboard.module.css';
import kul from '../../assets/images/kul.jpeg';
import ImageWithTextContainer from '../ImageWithTextContainer/ImageWithTextContainer';
// import ImageWrapper from './ImageWrapper';

const Dashboard: React.FC = () => {
    const constainers = [
        {
            image: truck,
            heading: "Company Overview",
            text: "We are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship."
        },
        {
            image: truck,
            heading: "Our Mission",
            text: "We are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship."
        },
        {
            image: truck,
            heading: "CSR Activity",
            text: "We are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship."
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
                    <b>Gomti Infra Mining Pvt. Ltd.</b>, we are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship.
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
                            />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default Dashboard;
