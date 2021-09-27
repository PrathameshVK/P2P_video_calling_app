import React, {useRef,useState}  from 'react';
import { ThemeProvider } from '@material-ui/core';
import { useStyles } from '../StyledComponents/CustomStyles';
import { theme } from '../StyledComponents/Theme';
import { StyledMainBody } from '../StyledComponents/StyledMainBody';
import { Error } from '../StyledComponents/Error';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useAuth} from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

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
                    <div className="main">
                        Your <span>personal</span><br></br>
                        video chatting room
                        <p>Log in and <span>start chatting</span></p>
                    </div>
                    <div className="form">
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
                            fullWidth
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
                            fullWidth
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