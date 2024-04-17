import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../../Services/auth";

function NavBar({ onLogout }) {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("accessToken");

  return (
    currentUser && (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar postion="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate("/task")}
            >
              TASK APPLICATION
            </Typography>

            <>
              <Button color="inherit" onClick={onLogout}>
                Logout
              </Button>
            </>
          </Toolbar>
        </AppBar>
      </Box>
    )
  );
}

export default NavBar;
