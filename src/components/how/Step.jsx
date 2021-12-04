import styles from "./Step.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material"

export default function Step({ number, title, description }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Grid container direction='row' className={classNames(styles.container)}>
                <Grid item className={classNames(styles.numberWrapper)}>
                    <div className={classNames(styles.number)}>{number}</div>
                </Grid>
                <Grid item className={classNames(styles.contentWrapper)}>
                    <div className={classNames(styles.title)}>{title}</div>
                    <div className={classNames(styles.description)}>{description}</div>
                </Grid>
            </Grid>
        </div>
    );
}