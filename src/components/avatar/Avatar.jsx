import styles from "./Avatar.module.scss";
import * as React from 'react';
import Container from "@mui/material/Container"

export default function Avatar({ size = 90, url, verified = false }) {

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container} sx={{ width: size, height: size }}>
                <img className={styles.image} src={url} />
                {verified ? <img className={styles.badge} src={'/images/verified.svg'} /> : null}
            </Container>
        </div>

        // <div className={classNames(styles.avatar)} style={{
        //     width: size + 'px',
        //     height: size + 'px'
        // }}>
        //     <img className={classNames(styles.image)} src={url}>
        //     </img>
        //     {verified ? <img src='images/verified.svg' className='badge' /> : null}
        // </div>
    );
}