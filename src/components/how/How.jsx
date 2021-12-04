import styles from "./How.module.scss";
import classNames from "classnames";
import { Grid, Button } from "@mui/material"
import Step from "./Step";

export default function How({ title, description, items = [], link }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Grid container direction='row' spacing={1} className={classNames(styles.container)}>
                <Grid item xs={6} className={classNames(styles.howContainer)}>
                    <div>
                        <h1 className={classNames(styles.title)}>{title}</h1>
                        <p className={classNames(styles.description)}>{description}</p>
                        <Button href={link} className={classNames(styles.button)}>LEARN MORE</Button>
                    </div>
                </Grid>
                <Grid item xs={6} container spacing='30px' direction='column' className={classNames(styles.stepsContainer)}>
                    {items.map((item)=><CurrentStep item={item}/>)}
                </Grid>
            </Grid>
        </div>
    );
}

function CurrentStep({ item = [] }) {
    return (
        <Grid item xs={4} className={classNames(styles.item)}>
            <Step number={item.number} title={item.title} description={item.description} />
        </Grid>
    )
}