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
import { Link, useNavigate } from "react-router-dom";
import "./loginpage.css";
import * as authService from "../../Services/auth";

function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await authService.register(form.name, form.username, form.password);
      alert("Successful Registration");
      navigate("/login");
    } catch (error) {
      if (error.response && error.status === 400) {
        alert(error.reponse.data.message);
      }
    }
  };
  return (
    <div className="bodies">
      <div className="wrapper">
        <h1>REGISTER</h1>
        <Divider />
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Name"
              id="name"
              name="name"
              fullWidth
              onChange={handleChange}
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

          <div style={{ marginTop: "20px" }}>
            <TextField
              label="Username"
              id="username"
              fullWidth
              name="username"
              onChange={handleChange}
              autoComplete="username"
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

            <FormControl
              variant="outlined"
              sx={{ marginTop: 2, width: "100%" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                name="password"
                autoComplete="current-password"
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
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
