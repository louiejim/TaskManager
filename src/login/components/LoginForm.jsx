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
import "./loginpage.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bodies">
      <div className="wrapper">
        <h1>LOG IN</h1>
        <Divider />
        <br />
        <div>
          <TextField
            label="Usernames"
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
            style={{ borderRadius: "45px", marginTop: "20px" }}
            LinkComponent={Link}
            to="/task"
          >
            Login
          </Button>
          <br />
          <h5>
            Don't have an account? <Link to={"/register"}>REGISTER</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
