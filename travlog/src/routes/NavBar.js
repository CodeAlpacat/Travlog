import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

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

  const NavMenuItems = [
    {
      title: "내 프로필",
    },
    {
      title: "로그아웃",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="neutral">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="default"
              aria-label="Open to show more"
              sx={{ mr: 2 }}
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {NavMenuItems.map((item) => (
                  <MenuItem
                    onClick={handleClose}
                    key={item.title}
                    value={item.title}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            

            {/* 나중에 폰트 적용하기 */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "black", fontFamily: "Impact", fontSize: "27px" }}
            >
              에몽이의 여행 블로그
            </Typography>

            <Button variant="outlined">
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "blue" }}
              >
                로그인
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Container>
  );
};

export default NavBar;
