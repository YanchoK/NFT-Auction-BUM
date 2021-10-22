import styles from "./User.module.scss";
import classNames from "classnames";
import * as React from 'react';
import Avatar from '../avatar/Avatar'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export default function User({ name = "", info = "", avatar = "", size = 55, verified = false }) {


    return (
            <div className={classNames(styles.user)} >
                <Grid container wrap="nowrap" spacing={1}>
                    <Grid item>
                        <Avatar url={avatar} />
                    </Grid>
                    <Grid item>
                        <p className={classNames(styles.name)}>{name}</p>
                        <p className={classNames(styles.info)}>{info}</p>
                    </Grid>
                </Grid>
            </div>
    );
}