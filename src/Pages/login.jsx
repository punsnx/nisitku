import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { LoginProcess } from "../api/auth";
import { useNavigate, redirect } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await LoginProcess(username, password);
    if (res) {
      console.log("Auth Pass");
      navigate("/");
      window.location.reload();
    }
    console.log("Auth Fail");
  };
  return (
    <>
      <div className="w-full h-screen bg-green-400 ">
        <div className="flex w-full h-1/5 justify-center items-center">
          <label className="font-bold text-4xl">Authentication</label>
        </div>
        <div className="flex w-full justify-center">
          <form
            className="flex flex-col w-[85%] pt-10 pb-10 space-y-8 items-center rounded-xl bg-white shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-3xl">KU ALL Login</label>
            </div>
            <FormControl sx={{ width: "90%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Username
              </InputLabel>
              <OutlinedInput
                value={username}
                onChange={handleUserChange}
                required
                placeholder="bxxxxxxxxxx"
                id="outlined-adornment-password"
                type="text"
                label="Username"
              />
            </FormControl>
            {/*  */}
            <FormControl sx={{ width: "90%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                value={password}
                onChange={handlePassChange}
                required
                placeholder="your password"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
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
              color="error"
              className="w-[50%]"
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
