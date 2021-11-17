import MuiCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Chip from "@mui/material/Chip";
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from "@mui/material/Box"
import styles from "./Card.module.scss";
import Avatar from "../avatar/Avatar"
import millify from "millify";
import classNames from "classnames";
import Grid from "@mui/material/Grid"
import Countdown from 'react-countdown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Card({ name = "", likes = 0, user = {}, mediaUrl = "", price = 0, currency = "",timeLeft=0 }) {
    return (
        <MuiCard className={styles.card}>
            <CardHeader
                avatar={
                    <Avatar url={user.avatarUrl} verified={user.verified} size='55px' />
                }
            />
             {timeLeft ? <LiveCard timeLeft={timeLeft} /> : null}
            <div >
                <img src={mediaUrl} className={classNames(styles.media)}></img>
            </div>
            <CardContent className={styles.content}>
                <Box>
                    <div className={styles.title}>{name}</div>
                    <div className={styles.price}>{"~"+price + " " + currency}</div>
                </Box>
                <div className='likes'>
                <Stack direction="row" spacing={1} >
                    <Chip 
                        icon={<FavoriteIcon />}
                        label={millify(likes)}
                        variant='outlined'
                        color='success' />
                </Stack>
                </div>
            </CardContent>
        </MuiCard>
    );
}

function LiveCard({ timeLeft = 0 }) {
    return (
        <div className={styles.liveCardWrapper}>
            <Grid container className={styles.grid}>
                <Grid item className={styles.badge}>
                    <FiberManualRecordIcon style={{color: 'black'}}/>
                    <div className={styles.live}>LIVE</div>
                </Grid>
                <Grid item className={styles.counter}>
                    <Countdown className={styles.counterContent} date={Date.now() + timeLeft * 100000} />
                </Grid>
            </Grid>
        </div>
    );
}
