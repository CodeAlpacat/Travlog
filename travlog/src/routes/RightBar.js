import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const RightBar = () => {
  return (
    <Box flex={2} p={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100} mt={2} mb={2} style={{ fontFamily:"Single Day, cursive" }}>
          나의 추억들
        </Typography>

        <ImageList col={3} rowHeight={200} gap={7}>
          <ImageListItem>
            <img src="https://blog.kakaocdn.net/dn/trWCs/btq8cQ3tUrg/dy2vdRIYCSkeSlvoLnwrdK/img.png" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://file.mk.co.kr/meet/neds/2015/04/image_readtop_2015_317241_14280264621852184.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://i.pinimg.com/originals/a2/99/62/a299629935f456c689aa76247a7ee3f5.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://img.etoday.co.kr/pto_db/2018/03/600/20180330100927_1200025_1200_799.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://w7.pngwing.com/pngs/244/306/png-transparent-east-lake-lake-tai-donghu-luoyan-scenic-area-u843du96c1u666fu533a-tourist-attraction-lake-harmony-resort-photography-landscape-natural-thumbnail.png" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://w7.pngwing.com/pngs/231/499/png-transparent-landscape-graphy-of-red-and-gray-temple-lake-yamanaka-mount-fuji-lake-kawaguchi-oshino-hakkai-fuji-q-highland-mount-fuji-japan-attractions-park-attraction-famous-japan-travel-thumbnail.png" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2} style={{ fontFamily:"Single Day, cursive" }}>
          최근 대화
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f61c5703-4774-44c7-8beb-55c7af05c34f-profile_image-300x300.png?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="감자라떼 한 사발? ㄱㄱ?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    네버스탑포테이토
                  </Typography>
                  {"-감자 vs 고구마?"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://images.velog.io/images/suzieep/post/a137794d-1f46-4af8-ac58-954d4dc0696f/logo-python.png?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="감히 자바스크립트하고 바람을 펴? ㅂㄷㅂㄷ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Python
                  </Typography>
                  {"-냉동볶음밥은 못참지"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://media.bunjang.co.kr/product/170766779_3_1637643102_w360.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </ListItemAvatar>
            <ListItemText
              primary="자바스크립트 공부 안해도되는데 ㅋ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    몰?코코
                  </Typography>
                  {"- 링피트 구매하쉴? 내기 허쉴?"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
