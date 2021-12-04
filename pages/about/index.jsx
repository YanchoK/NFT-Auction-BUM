import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" component={Link} noLinkStyle href="https://gitlab.com/boom.dev-tasks/nft-auction-bum/-/tree/master">
            🏠 Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
