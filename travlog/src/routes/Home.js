import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Login from './Login'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>에몽이의 여행 블로그</h1>
    </header>
  );
};

const NavBar = () => {
  return (
    <nav>
      <Link to="/Login">로그인</Link>
    </nav>
  );
};

const Article = () => {
  const [open, SetOpen] = useState(false);

  return (
    <article>
      <h2>Welcome</h2>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis vero
      quisquam, doloremque modi fugit quis quos esse suscipit similique, eos
      architecto autem, nisi blanditiis doloribus nulla sapiente laborum beatae
      consectetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      <br />
      <ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            SetOpen(true);
          }}
        >
          CREATE
        </Button>
        <Button variant="outlined">UPDATE</Button>
        <Button variant="outlined">DELETE</Button>
      </ButtonGroup>
      <Dialog open={open}>
        <DialogTitle>CREATE</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello! Created</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              SetOpen(false);
            }}
          >
            CANCEL
          </Button>
          <Button variant="outlined">CREATE</Button>
        </DialogActions>
      </Dialog>
    </article>
  );
};

const Home = () => {
  return (
    <Container fixed>
      <Header />
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
