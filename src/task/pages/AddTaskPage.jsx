import { Alert, Box, Button, Card, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
function AddTaskPage({ onSave }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({
    title: "",
  });

  const onInput = ({ currentTarget: input }) => {
    setForm({
      [input.name]: input.value.toUpperCase(),
    });
  };

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              variant="contained"
              size="small"
              style={{ borderRadius: 100 }}
              onClick={() => {
                setOpen(false);
                onSave(form);
              }}
            >
              SAVE
            </Button>
          </div>
          <div style={{ font: 24, fontWeight: "bold", textAlign: "center" }}>
            <h1>CREATE TASK</h1>
          </div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-textarea"
              label="Title"
              placeholder="Input Title"
              multiline
              maxRows={4}
              name="title"
              onChange={onInput}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default AddTaskPage;
