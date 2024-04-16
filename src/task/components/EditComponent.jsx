import { Box, Button, Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getCurrentUser } from "../../Services/auth";

function EditComponent({ id, complete, onComplete }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isAdmin = getCurrentUser();

  return (
    <Grid>
      {!isAdmin && !complete && (
        <Button
          size="small"
          style={{
            height: 20,
          }}
          variant="contained"
          onClick={handleOpen}
          startIcon={<CheckCircleIcon color="red" />}
        >
          MARK
        </Button>
      )}
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
            width: 200,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              onComplete(id, !complete);
              setOpen(false);
            }}
          >
            {complete ? <div>Incomplete</div> : <div>MARK AS COMPLETED</div>}
          </Button>
        </Box>
      </Modal>
    </Grid>
  );
}

export default EditComponent;
