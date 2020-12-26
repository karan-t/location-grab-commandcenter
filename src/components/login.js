import React from "react";
import { Redirect } from "react-router-dom";
import {
  Card,
  TextField,
  Button
} from "@material-ui/core";
import { useForm } from "./useForm";
import firebase from '../Firebase'
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

function Login(props) {

  const initialState = {
    email: "",
    password: "",
  };

  const { values, handleInputChange, errors, loggedIn, setLoggedIn } = useForm(
    initialState
  );

  const login = async (email, password) => {
    try {
        var logemail = email;
        var logpass = password;
        const result = await firebase.auth().signInWithEmailAndPassword(logemail, logpass);
        if (result) {
            localStorage.setItem("token", result.user.refreshToken);
            localStorage.setItem("uid", result.user.uid);
            localStorage.setItem("Email",result.user.email)
            return true;
        }
    } catch (error) {
    }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(values.email, values.password);
    result ? setLoggedIn(result) : alert("Login Failed Please Try Again");
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="login_container">
        <Card className="login_card">
          <form onSubmit={handleSubmit} Validate className="container" >
            <h4 id="title_login" for="email">
              Login
            </h4>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="email"
              name="email"
              onChange={handleInputChange}
              value={values.email}
              autoFocus
              helperText={errors.emailHelper}
              error={errors.emailError}
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              onChange={handleInputChange}
              value={values.password}
              autoComplete="current-password"
              helperText={errors.passwordHelper}
              error={errors.passwordError}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
            className = "login_button"
              type="submit"
              variant="contained"
              color = "secondary"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                color: "white",
                padding: `18px 18px 18px 18px`,
              }}
            >
              Login
            </Button>
          </form>
          </Card>
      </div>
    );
  }
}
export default Login;
