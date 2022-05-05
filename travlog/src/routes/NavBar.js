import { Toolbar, styled, AppBar, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import PetsIcon from "@mui/icons-material/Pets";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";

const NavBar = ({mode}) => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Theme = createTheme({
    palette: {
      primary: {
        main: '#00bcd4',
      }
    },
  });

  const ThemeDark = createTheme({
    palette: {
      primary: {
        main: '#000',
      }
    },
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
      <ThemeProvider theme={mode === 'dark' ? ThemeDark : Theme}>
        <AppBar position="sticky" style={{ color: "#03a9f4" }}>
          <StyledToolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
              style={{
                color: "white",
                fontFamily: "Libre Baskerville, serif",
                fontSize: "27px",
              }}
            >
              Travlog
            </Typography>

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
