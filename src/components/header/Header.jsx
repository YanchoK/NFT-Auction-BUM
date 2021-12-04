import Logo from '../logo/Logo'
import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import classNames from "classnames";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Header() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        {/* <input type="text" placeholder="Find items,users and activities"></input> */}
        
      {/* <Grid container spacing={2}> */}

      <Grid item xs={3}>
        <Logo/>
        </Grid>

        <Grid item xs={4} className={classNames(styles.gridInput)}>
        <Button href="#text-buttons"><SearchIcon/></Button>
        {/* <SearchIcon/> */}
        <input className={classNames(styles.input)} type="text" placeholder="Find items,users and activities"></input>
        </Grid>

        <Grid item xs={4}>
        <Stack spacing={0} direction="row">
      <Button href="#text-buttons" variant="text">Home</Button>
      <Button href="#text-buttons" variant="text">Activity</Button>
      <Button href="#text-buttons" variant="contained">Explore</Button>
    </Stack>
        </Grid>

      {/* </Grid> */}
      </Container>
    </div>
  );
}

        // <Grid item xs={3}>
        // <Item><HomeIcon/></Item>
        // <HomeIcon/>
        // </Grid>

        // <Grid item xs={4}>
        //   <Item>xs=4</Item>
        // </Grid>

        // <Grid item xs={4}>
        //   <Item>xs=4</Item>
        // </Grid>