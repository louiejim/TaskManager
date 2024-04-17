import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Service from "../../Services/task";

function TitleComponent({ open, handleClose, onSave, initialValue }) {
  const onInput = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value.toUpperCase(),
    });
  };

  const [form, setForm] = useState({
    id: "",
    title: "",
  });
  useEffect(() => {
    setForm(initialValue);
  }, [initialValue]);

  const click = () => {};

  return (
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
              handleClose();
              onSave(form);
              click();
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
            value={form.title}
            placeholder="Input Title"
            multiline
            maxRows={4}
            name="title"
            onChange={onInput}
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default TitleComponent;
