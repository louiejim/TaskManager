import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginpage.css";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bodies">
      <div className="wrapper">
        <h1>REGISTER</h1>
        <Divider />
        <br />
        <div>
          <TextField
            label="Username"
            id="username"
            fullWidth
            InputProps={{
              style: {
                borderRadius: "30px",
                position: "relative",
                height: "50px",
              },
              endAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <div style={{ marginTop: "20px" }}>
            <TextField
              label="Name"
              id="name"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: "30px",
                  height: "50px",
                },
                endAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <FormControl variant="outlined" sx={{ marginTop: 2, width: "100%" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              style={{
                borderRadius: "30px",
                position: "relative",
                height: "50px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    style={{ marginRight: "1px" }}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            variant="contained"
            className="submitButton"
            type="submit"
            style={{ borderRadius: "45px", marginTop: "20px" }}
          >
            REGISTER
          </Button>
          <Button
            variant="outlined"
            className="submitButton"
            style={{ borderRadius: "45px", marginTop: "20px" }}
            LinkComponent={Link}
            to="/"
          >
            BACK
          </Button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
