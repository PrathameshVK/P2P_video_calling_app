import React from 'react';
import styled from 'styled-components';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const theme=createTheme({
    palette:{
        primary:{
            main: '#008037'
        },
        secondary:{
            main:'#008037'
        }
    },

    width: '25ch'
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
          borderColor: '#008037'
        }
        
    },
    
    cssFocused: {
        borderWidth: '1px',
        borderColor:  '#008037'
    },
    
    root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: '#008037'
        }
      },

    notchedOutline: {
        borderWidth: '1px',
        borderColor:  '#008037',
        '&:hover':{
            borderColor: '#008037'
        }
    },
})

export default function Signup() {
    const classes=useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledMainBody>
                    <div className="main-intro">
                        Your <span>personal</span><br></br>
                        video chatting room
                        <p>Sign up now and get <span>connected</span></p>
                    </div>
                    <div className="signup-form">
                        <h2>Sign in</h2>
                        <TextField
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
                                }
                            }}/><br/><br/>
                        <TextField
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
                                }
                            }}
                        /><br/><br/>
                        <Button className={classes.btn} variant="contained">Sign in</Button><br/><br/>
                        <p>Already have an account ? <a>Log in</a></p>
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
    .signup-form{
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
            a{
                color: #CC08FD;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`