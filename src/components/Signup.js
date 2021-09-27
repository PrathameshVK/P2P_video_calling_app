import React, { useRef, useState }  from 'react';
import { useStyles } from '../StyledComponents/CustomStyles';
import { theme } from '../StyledComponents/Theme';
import { ThemeProvider} from '@material-ui/core';
import { StyledMainBody } from '../StyledComponents/StyledMainBody';
import { Error } from '../StyledComponents/Error';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {

    const emailRef=useRef();
    const passwordRef=useRef();
    const {signup}=useAuth();
    const [error, setError]=useState('');
    const [loading, setLoading]=useState(false);
    const history=useHistory();
 
    async function handleSignup(e){
        e.preventDefault();
        try {  
            setError('');
            setLoading(true);
            await signup(emailRef.current.value,passwordRef.current.value);
            history.push('/');
        } catch {
            setError("Could not sign in !");
        }
        setLoading(false);
    }

    const classes=useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledMainBody>
                    <div className="main">
                        Your <span>personal</span><br></br>
                        video chatting room
                        <p>Sign up now and get <span>connected</span></p>
                    </div>
                    <div className="form">
                        <h2>Sign in</h2>
                        {
                            error &&
                            <Error>
                                {error}
                            </Error>
                        }
                        <form onSubmit={handleSignup}>
                        <TextField
                            placeholder="Enter email here..."
                            autoComplete="off"
                            className={classes.field}
                            fullWidth id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
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
                            placeholder="Enter password here..."
                            autoComplete="off"
                            className={classes.field}
                            color="secondary"
                            fullWidth id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
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
                            Sign in
                        </Button><br/><br/>
                        </form>
                        <p>Already have an account ? <Link className="link" to="/login">Log in</Link></p>
                    </div>
                </StyledMainBody>
            </ThemeProvider>
        </>
    )
}