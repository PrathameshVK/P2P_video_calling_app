import React, {useRef,useState}  from 'react';
import styled from 'styled-components';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useAuth} from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const theme=createTheme({
    palette:{
        primary:{
            main: '#008037'
        },
        secondary:{
            main:'#008037'
        }
    }
})

const useStyles=makeStyles({
    field:{
        width: 400,
        border: '#008037'
    },
    btn:{
        color: '#fff',
        backgroundColor: '#008037',
        height: 50,
        width: 400,
        '&:hover':{
            backgroundColor: '#09a04b',
        }
    },
    cssLabel: {
        color : '#008037'
      }, 
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: '#008037',
        }
    },
    cssFocused: {
        borderWidth: '1px',
        borderColor:  '#008037',
    },
    root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: '#008037',
        }
    },
    input: {
        color: '#008037'
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor:  '#008037',
        '&:hover':{
            borderColor: '#008037'
        }
    }
})

export default function Login() {

    const emailRef=useRef();
    const passwordRef=useRef();
    const {login}=useAuth();
    const [error, setError]=useState('');
    const [loading, setLoading]=useState(false);
    const history=useHistory();

    async function handleSignup(e){
        e.preventDefault();
        try {  
            setError('');
            setLoading(true);
            await login(emailRef.current.value,passwordRef.current.value);
            history.push('/');
        } catch (error) {
            console.log(error);
            //setError("Could not log in !");
        }
        setLoading(false);
    }

    const classes=useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledMainBody>
                    <div className="main-intro">
                        Your <span>personal</span><br></br>
                        video chatting room
                        <p>Log in and <span>start chatting</span></p>
                    </div>
                    <div className="login-form">
                        <h2>Log in</h2>
                        {
                            error &&
                            <Error>
                                {error}
                            </Error>
                        }
                        <form onSubmit={handleSignup}>
                        <TextField
                            autoComplete="off"
                            className={classes.field}
                            fullWidth id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                }
                              }}
                              InputProps={{
                                classes: {
                                  root: classes.root,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                                className: classes.input
                            }}
                            type="email"
                            inputRef={emailRef}
                        /><br/><br/>
                        <TextField
                            autoComplete="off"
                            className={classes.field}
                            color="secondary"
                            fullWidth id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                  root: classes.cssLabel,
                                  focused: classes.cssFocused,
                                }
                            }}
                            InputProps={{
                                classes: {
                                  root: classes.root,
                                  focused: classes.cssFocused,
                                  notchedOutline: classes.notchedOutline,
                                },
                                className: classes.input
                            }}
                            type="password"
                            inputRef={passwordRef}
                        /><br/><br/>
                        <Button
                            disabled={loading}
                            className={classes.btn}
                            variant="contained"
                            type="submit"
                        >
                            Log in
                        </Button><br/><br/>
                        </form>
                        <p>Don't have an account ? <Link  className="link" to="/signup">Sign up</Link></p>
                    </div>
                </StyledMainBody>
            </ThemeProvider>
        </>
    )
}

const StyledMainBody=styled.div`
  display: flex;
  min-height: 76vh;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
    .main-intro{
        width: 50%;
        font-size: 2.5rem;
        font-weight: 600;
        span{
            color: #CC08FD;
        }
        p{
            font-size: 2rem;
            font-weight: 400;
            span{
                color: #008037;
            }
        }
    }
    .login-form{
        margin: auto;
        text-align: center;
        h2{
            font-size: 2.5rem;
            font-weight: 500;
            color: #CC08FD;
        }
        .input{
            width: 100%;
        }
        p{
            font-size: 1.2rem;
            .link{
                color: #CC08FD;
                text-decoration: none;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`
const Error=styled.div`
    color: #d63f3f;
    width: inherit;
    font-size: 1.4rem;
    margin-bottom: 1vh;
`