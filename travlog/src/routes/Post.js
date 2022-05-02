import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { MoreVert } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const Post = ({ dataTitle, dataContent}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
      
        avatar={
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://tistory1.daumcdn.net/tistory/3365165/attach/ff9b9a1e02d2459488a5bd7284939f47?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        }
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVert />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem >게시글 삭제</MenuItem>
            </Menu>
          </IconButton>
        }
        // title="둘기의 그것이 알고싶다!"
        title={dataTitle}
        subheader="4월 30일, 2022"
      />
      <CardMedia
        component="img"
        height="900"
        image="https://i.pinimg.com/564x/44/71/01/447101dbe5a1f0ab0a1fea27d9268123.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* 아무도 몰랐던 충격적인 진실! 속보! 선량한줄 알았던 가명 김띠용이 연쇄
          감자 재배사건의 유력한 용의자로 지목되었다. 그녀는 순수한 표정에
          악의를 숨긴채 호미와 물뿌리개를 들고 범행 현장에 가던 도중 길가에
          심어져있던 선량한 잡초 모코코에게 발견되었다. 감자밭의 주인 피해자
          사슴은 뒤늦게.. 아니 사실을 알아차린지는 오래되었지만, 본능이 앞에
          닥치지 않은 일이라고 생각했다가 봉변을 당했다. 평소 네버스탑감자씨와
          친분이 있던 **에몽씨는 이번 참사가 황당하고 비통한 심정이다. 현재 가명
          김띠용은 도주중이며 행방이 묘연한 상태다. 파이썬 형사는 즉각 수사에
          돌입했으며, 구속 영장을 발부받을 예정이다. -리포터 둘기-
          uselessWing@molru.com */}
          {dataContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon />}
          />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
