import React from 'react'
import styles from './AboutUs.module.css'
import iron_ore_mines from '../../assets/images/iron_ore_mine.jpg'

const AboutUs = () => {
    return (

        <div className={styles.main_container}>
            <div>
                <div className={styles.text}>
                    About us
                </div>
                <div className={styles.conatainer}>
                    {/* Gomti Infra Mining Private Limited, we are dedicated to the responsible exploration and extraction of the Earth's valuable resources. With a legacy dating back decades, our company has been a stalwart in the mining industry, contributing to global development while prioritizing sustainability and environmental stewardship. */}
                    <div>
                        <span className={styles.main_text}> Gomti Infra Mining Private Limited </span> is a company that focuses on responsible exploration and extraction of valuable resources from the Earth. They have a longstanding legacy that spans several decades, which has established them as a reliable and significant presence in the mining industry. Their core mission revolves around two key principles:
                    </div>
                    <div>
                        Contributing to Global Development: company plays a vital role in the mining sector, which is crucial for the global economy and development. Through their activities, they help supply essential raw materials and resources that are used in various industries such as construction, manufacturing, and energy production. These resources are integral to economic growth and development on a global scale.
                    </div>
                    <div>
                        Prioritizing Sustainability and Environmental Stewardship: Gomti Infra Mining Private Limited is committed to responsible mining practices. This means that they take steps to ensure their activities are conducted in an environmentally responsible and sustainable manner. They aim to minimize the negative impact on the environment and surrounding communities while maximizing the efficient and ethical use of natural resources.
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={iron_ore_mines}
                    alt='aa'
                    className={styles.image}
                />
            </div>
        </div>
    )
}

export default AboutUs