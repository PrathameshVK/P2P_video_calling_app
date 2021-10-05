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
import { db } from '../firebase';
import { doc, setDoc} from 'firebase/firestore';

export default function Signup() {

    const [userName, setUserName]=useState("");
    const usernameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const {signup}=useAuth();
    const [error, setError]=useState('');
    const [loading, setLoading]=useState(false);
    const history=useHistory();
    const handleChange=()=>{
        setUserName(usernameRef.current.value);
    }
    async function handleSignup(e){
        e.preventDefault();
        try {  
            setError('');
            setLoading(true);
            await signup(emailRef.current.value,passwordRef.current.value)
            .then(currentUser=>{
                setDoc(doc(db, "users", currentUser.user.uid), {
                    username: userName
                  });
            }) 
            history.push('/');
        }catch (error) {
            console.log(error);
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
                            placeholder="Enter username here..."
                            autoComplete="off"
                            className={classes.field}
                            fullWidth
                            label="Username"
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
                            type="text"
                            inputRef={usernameRef}
                            onChange={handleChange}
                        /><br/><br/>
                        <TextField
                            placeholder="Enter email here..."
                            autoComplete="off"
                            className={classes.field}
                            fullWidth
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
                            fullWidth
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