import styles from "./User.module.scss";
import * as React from 'react';
import Avatar from '../avatar/Avatar'
import Box from "@mui/material/Box"


export default function User({ name = "", info = "", avatar = "", size = 55, verified = false }) {


    return (
        <div className={styles.user}>
        <Avatar url={avatar} verified={verified} />
        <Box className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.info}>{info} items</div>
        </Box>
    </div>
    );
}