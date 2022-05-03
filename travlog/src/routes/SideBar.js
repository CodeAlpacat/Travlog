import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Switch from "@mui/material/Switch";

const SideBar = ({ onDarkMode }) => {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://tistory1.daumcdn.net/tistory/3365165/attach/ff9b9a1e02d2459488a5bd7284939f47?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </ListItemIcon>
              <ListItemText primary="둘기" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://media.bunjang.co.kr/product/170766779_3_1637643102_w360.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </ListItemIcon>
              <ListItemText primary="모코코" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://i.pinimg.com/474x/92/ee/6a/92ee6aeba842d52f8d2995bdc1222441.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </ListItemIcon>
              <ListItemText primary="김띠용" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/f61c5703-4774-44c7-8beb-55c7af05c34f-profile_image-300x300.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </ListItemIcon>
              <ListItemText primary="네버스탑감자" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  src="https://images.velog.io/images/suzieep/post/a137794d-1f46-4af8-ac58-954d4dc0696f/logo-python.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </ListItemIcon>
              <ListItemText primary="이썬" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <NightlightIcon />
              </ListItemIcon>
              <Switch
                onChange={onDarkMode}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
