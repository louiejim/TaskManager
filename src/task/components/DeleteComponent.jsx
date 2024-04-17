import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";

function DeleteComponent({ onDelete, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        color="error"
        variant="contained"
        size="small"
        onClick={handleOpen}
      >
        DELETE
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
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
          }}
        >
          <Button
            variant="contained"
            size="small"
            fullWidth
            onClick={() => {
              onDelete(id);
              setOpen(false);
            }}
          >
            DELETE
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteComponent;
