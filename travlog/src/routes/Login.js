import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ fontWeight: "Bold" }}>
          로그인!
        </Typography>
        <TextField
          margin="normal"
          label="이메일 입력 or 매콤주먹"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          label="비밀번호 or 매콤발차기"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="자동 로그인!!"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb:3 }}>
          Sign in
        </Button>
        <Grid container sx={{ mb:3}}>
          <Grid item xs>
            <Link
              to="#"
              variant="body2"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
            >
              비번 잃어버림?
            </Link>
          </Grid>
          <Grid item>
            <Link
              to="#"
              variant="body2"
              style={{
                textDecoration: "none",
                color: "blue",
              }}
            >
              회원가입!!
            </Link>
          </Grid>
        </Grid>

        <Button variant="outlined" fullWidth>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "blue",
              fontWeight: "Bold",
              fontSize: "18px",
            }}
          >
            HOME
          </Link>
        </Button>
      </Box>
    </Container>
  );
}
