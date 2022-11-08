import { Box, Button, FormControl, InputAdornment, InputLabel, OutlinedInput, IconButton, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../Components/Layout'
import { InputOutlined, Visibility, VisibilityOff } from "@mui/icons-material"

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const onLogin = () => {

    if (!email || !password) {
      alert("Please Enter Email and password")
    } else {
      alert(email + "   " + password)
    }
  }
  return (
    <Layout>

      <Paper elevation={3} sx={{
        maxWidth: "sm",
        margin: "1rem auto",
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#e1e7ef",
        color: "inherit"


      }}>

        {/* Title */}
        <Typography sx={{
          padding: "5px",
          cursor: "pointer",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontSize: "2rem",
          borderBottom: "1px solid #11234f",
          color: "black"



        }}>
          Login
        </Typography>


        {/* info get */}
        <FormControl variant='filled' fullWidth>

          {/* Email field */}
          <TextField id="outlined-basic"
            type={"email"}
            label="Email"
            variant="outlined"
            placeholder="Enter your email"

            required
            autoFocus

            fullWidth
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              color: "black"
            }}

            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />

          {/* Password field */}
          <FormControl variant="outlined" fullWidth required>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined" color='secondary'
              placeholder="Enter your password"
              fullWidth
              required
              autoFocus
              aria-label='Password'
              value={password}

              sx={{
                marginBottom: "20px",
                color: "black",


              }}

              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}


              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <VisibilityOff color='red' /> : <Visibility color='red' />}
                    {/* <Visibility /> */}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              onLogin()
            }}
          >Login</Button>

        </FormControl>

      </Paper>

    </Layout>
  )
}

export default Login