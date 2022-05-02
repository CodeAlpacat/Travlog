import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Button, Fab, Modal, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box, flexbox } from "@mui/system";
import styled from "@emotion/styled";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PanoramaIcon from '@mui/icons-material/Panorama';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"10px",
  marginBottom:'20px'
});

const Add = ({getPostContent, getPostTitle, CreateNewData}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Tooltip
        title="Delete"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={480} height={330} p={3} borderRadius={10} bgcolor={"background.default"} color={"text.primary"}>
          <Typography variant="h5" color="gray" textAlign="center">
            게시물 작성
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://media.bunjang.co.kr/product/170766779_3_1637643102_w360.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Typography fontWeight={500} variant="span">모코코</Typography>
          </UserBox>
          <TextField
          id="titleAdd"
          onChange={getPostTitle}
          label="제목을 작성해주세요"
          multiline
          maxRows={4}
          variant="filled"
        />
          <TextField
          id="contentAdd"
          onChange={getPostContent}
          sx={{ width:"100%" }}
          multiline
          rows={3}
          placeholder="게시글을 작성해주세요."
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <InsertEmoticonIcon color="primary"/>
          <PanoramaIcon color='secondary'/>
          <VideocamIcon color='success'/>
          <AddLocationAltIcon color="error"/>
        </Stack>
        <Button onClick={CreateNewData} fullWidth variant="contained">
          게시하기
        </Button>
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;
