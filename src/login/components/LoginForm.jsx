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

function LoginForm({onLogin}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnChange = ({ currentTarget: input }) => {
    setForm({
      ...form,
      [input.name]: input.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await onLogin(form.username,form.password)
    } catch(error){
      console.log("error",error)
      if(error.response && (error.response.status===400)){
        alert (error.reponse.data.message)
      }
    }
  };

  return (
    <div className="bodies">
      <div className="wrapper">
        <h1>LOG IN</h1>
        <Divider />
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Usernames"
              id="username"
              name="username"
              onChange={handleOnChange}
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

            <FormControl
              variant="outlined"
              sx={{ marginTop: 2, width: "100%" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                onChange={handleOnChange}
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
              // LinkComponent={Link}
              // to="/task"
            >
              Login
            </Button>
            <br />
            <h5>
              Don't have an account? <Link to={"/register"}>REGISTER</Link>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
