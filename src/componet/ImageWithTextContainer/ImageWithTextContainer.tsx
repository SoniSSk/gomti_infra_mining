import React from 'react';
import styles from './ImageWithTextContainer.module.css';

const ImageWithTextContainer = (props: any) => {
    const {
        image,
        heading,
        text,
        link
    } = props;
    return (
        <div className={styles.contaoner}>
            <img
                src={image}
                alt="ss"
                width={200}
                className={styles.img_st}
            />
            <div className={styles.text_he}>
                {heading}
            </div>
            <div className={styles.text_cont}>
                <p>{text} <a href={link}>read more...</a></p>
            </div>
        </div>
    );
}

export default ImageWithTextContainer;