import styles from "./Card.module.scss";
import classNames from "classnames";
import * as React from 'react';
import Avatar from '../avatar/Avatar'
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// const URL="D:\1. Programming\Boom.dev\Projects\nft-auction-bum\public\images\avatar.png";
//

export default function Card({ name = "", likes = 0, mediaUrl = "", user = { avatarUrl: "", verified: false }, price = "", curency = "" }) {

    return (
        <div className={classNames(styles.card)} >
            <Avatar url={user.avatarUrl} verified={user.verified} />
            <img className={classNames(styles.media)} src={mediaUrl}></img>
            <h3 className={classNames(styles.title)}>{name}</h3>
            <button className={classNames(styles.likes)}>
                <FavoriteIcon />
                {millify(likes, {
                    precision: 1,
                    lowercase: true
                })}
            </button>
            <p className={classNames(styles.price)}>
                {`${price} ${curency}`}
            </p>
        </div>
    );
}