import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import TitleComponent from "../components/TitleComponent";
function AddTaskPage({ onSave }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        size="small"
        endIcon={<PlaylistAddIcon />}
      >
        ADD TASK
      </Button>
      <TitleComponent
        open={open}
        handleClose={handleClose}
        onSave={onSave}
        initialValue={{ title: "", id: "" }}
      ></TitleComponent>
    </>
  );
}

export default AddTaskPage;
