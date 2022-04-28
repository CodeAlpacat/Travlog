import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Toolbar, styled, AppBar, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import PetsIcon from "@mui/icons-material/Pets";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { borderRadius } from "@mui/system";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";

const NavBar = () => {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#f3e5f5",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        "Georgia",
        "Impact Roman",
        "Impact",
      ].join(","),
    },
  });

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <AppBar position="sticky" color="neutral">
          <StyledToolbar>
            {/* 나중에 폰트 적용하기 */}
            <Grid container>
              <Grid item xs={1}>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  src="https://jmagazine.joins.com/_data/photo/2016/05/2949993309_olERkGMq_01.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Grid>
              <Grid item xs={11}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                  style={{
                    color: "black",
                    fontFamily:"Single Day, cursive",
                    fontSize: "27px",
                  }}
                >
                  에몽이의 여행 블로그
                </Typography>
              </Grid>
            </Grid>
            <PetsIcon
              sx={{ display: { xs: "block", sm: "none" } }}
              style={{ textDecoration: "none", color: "lightcoral" }}
              fontSize="large"
            />

            <Icons>
              <Badge badgeContent={300} color="error">
                <MailIcon sx={{ color: "#ffc107" }} />
              </Badge>

              <Badge badgeContent={10} color="error">
                <Notifications sx={{ color: "#ffc107" }} />
              </Badge>
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "blue" }}
              >
                <Badge color="error">
                  <LoginIcon
                    variant="outlined"
                    sx={{ color: "#ffc107" }}
                  ></LoginIcon>
                </Badge>
              </Link>

              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://media.bunjang.co.kr/product/170766779_3_1637643102_w360.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                onClick={(e) => setOpen(true)}
              />
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src="https://media.bunjang.co.kr/product/170766779_3_1637643102_w360.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Typography variant="span">모코코!</Typography>
            </UserBox>
          </StyledToolbar>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>My account</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};

export default NavBar;
