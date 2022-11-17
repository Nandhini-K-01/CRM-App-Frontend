import React from "react";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import GoogleButton from "react-google-button";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

}
const myStyle={
  backgroundImage: 
"url('https://www.xefi.com/app/uploads/2022/05/Quel-est-le-but-dun-logiciel-CRM-_-1024x574.jpeg')",
  height:'100vh',
  marginTop:'-100px',
  marginLeft:'0px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export default function LoginComponent() {
  const[email, setEmail] =React.useState('')
  const[password, setPassword] =React.useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        var response = await axios.post('https://b38-crm-app.herokuapp.com/register/signin', {
            email: email,
            password: password
        })
        if(response.data) {
            await localStorage.setItem("token", response.data)
            navigate('/crm/dashboard');
        }
    }catch(err) {
        console.log(err)
    }
}

  return (
      <div style={myStyle}>
      <CssVarsProvider>
      <main>
        <ModeToggle />
        <Sheet
          sx={{
            width: 300,
            mx: 16, // margin left & right
            my: 12, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!!!</b>
            </Typography>
            <Typography level="body1">Sign in to continue.</Typography>
          </div>
          <TextField
            required
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            label="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
          required
            name="password"
            type="password"
            placeholder="Your Password"
            label="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Link href="/forgot-password" style={{paddingLeft:"55%"}}><u>Forgot Password?</u></Link>
          <Button sx={{ mt: 1 /* margin top */ }} type="submit" onClick={handleSubmit}>Log in</Button>
          Or connect using
          <GoogleButton></GoogleButton>
          <Typography
            endDecorator={<Link href="/sign-up"><u>Sign up</u></Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don't have an account?
          </Typography>
          <b>Demo Login credentials:</b>
          admin@gmail.com<br/>
          Welcome123
        </Sheet>
      </main>
    </CssVarsProvider>
    </div>
  );
}
