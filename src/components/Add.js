import {
  Fab,
  Modal,
  Tooltip,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useState } from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const Add = () => {
  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
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
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              Ash
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="warning" />
            <PhotoCameraIcon color="primary" />
            <VideoCameraBackIcon color="danger" />
            <GroupAddIcon color="success" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};
