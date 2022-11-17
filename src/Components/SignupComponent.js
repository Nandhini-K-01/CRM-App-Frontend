import React from "react";
import { TextField,Box,Link,Button } from "@mui/material";

function SignupComponent(){
    return(
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      autoComplete="off"
    >
      <div>
        <h3>Signup to create your account!</h3>
        <TextField
          required
          id="outlined-required"
          label="Username (email id)"
          defaultValue=""
        /><br/>
        <TextField
          required
          id="outlined-firstname"
          label="First name"
          defaultValue=""
        /><br/>
        <TextField
          required
          id="outlined-lastname"
          label="Last name"
          defaultValue=""
        /><br/>
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br/>
        <TextField
          required
          id="outlined-confirmpassword-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        /><br/>
        <Button variant="contained">Sign Up</Button><br/><br/>
        Already have an account? <Link href="/"><u>Sign in</u></Link>
      </div>
    </Box>
 </div>
    )
}

export default SignupComponent;