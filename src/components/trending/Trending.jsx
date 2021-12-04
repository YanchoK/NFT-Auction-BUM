import { Container, Select, Grid, MenuItem } from "@mui/material"
import Card from "../card/Card";
import { useState } from "react";
import classNames from "classnames";
import styles from './Trending.module.scss';

export default function Trending({ cards = [] }) {
    const [period, setPeriod] = useState(0);

    const handleChange = (e) => {
        setPeriod(e.target.value);
    }

    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                <h1>Trending</h1>
                <div>
                    <Select
                        value={period}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}>
                        <MenuItem value={0}>This week</MenuItem>
                        <MenuItem value={1}>Today</MenuItem>
                        <MenuItem value={2}>This month</MenuItem>
                        <MenuItem value={3}>This year</MenuItem>
                    </Select>
                </div>
                <Card key={0} {...cards[0]} />
                <Card key={1} {...cards[1]} />
                <Card key={2} {...cards[2]} />
                <Card key={3} {...cards[3]} />
            </Container>
        </div>
    );
}