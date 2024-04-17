import { Button } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import TitleComponent from "../components/TitleComponent";

function EditTitlePage({ initialValue, onSave }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        startIcon={<EditIcon />}
        size="small"
      >
        EDIT
      </Button>
      <TitleComponent
        open={open}
        handleClose={handleClose}
        initialValue={initialValue}
        onSave={onSave}
      ></TitleComponent>
    </>
  );
}

export default EditTitlePage;
