import React, { useState, useEffect, useRef } from 'react';
import { StyledDashBoard } from '../StyledComponents/StyledDashboard';
import { theme } from '../StyledComponents/Theme';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import mainbg from '../img/mainbg.png';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {

    const idToCall=useRef();
    const [name, setName] = useState("");
    const [disabled,setDisabled] = useState(true);
    const classes=useStyles();
    const {currentUser}=useAuth();

    const handleCallId=(e)=>{
        if(idToCall.current.value.length>0){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }

    {/* useEffect(() => {
       const docRef = doc(db, "users", currentUser.uid);
        (async()=>{
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data().username);
                setName(docSnap.data().username);
            } else {
                 console.log("No such document!");
            }
        })();
    },[]);*/}
    
    return (
        <StyledDashBoard>
           <div className="main-intro">
                Your <span className="personal">personal</span><br></br>
                video chatting room
                <br/><br/>
                <div className="options">
                <ThemeProvider theme={theme}>
                <Link to="/videocall"><Button className={classes.btn} variant="contained">New Call</Button></Link>
                <TextField
                autoComplete="off"
                    id="standard-basic"
                    label="Join call"
                    className={classes.field}
                    variant="standard"
                    InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                        }
                      }}
                      InputProps={{
                        className: classes.input    
                    }}
                    inputRef={idToCall}
                    onChange={handleCallId}
                />
                <Button disabled={disabled} className={classes.btnJoin} variant="text">Join</Button>
                </ThemeProvider>
                </div>
            </div>
            <div>
                <img src={mainbg} alt="background"></img>
            </div>
        </StyledDashBoard>
    )
}


const useStyles=makeStyles({  
    field:{
        width: 200,
        borderColor: '#008037',
        marginLeft: 20
    },
    btnJoin:{
        color: '#008037'
    },
    btn:{
        color: '#fff',
        backgroundColor: '#008037',
        height: 50,
        fontSize: 12,
        width: 200,
        '&:hover':{
            backgroundColor: '#09a04b',
        },
        "@media (min-height:320px) and (max-width: 480px)": {
            width: 190,
            height: 40
          },
        "@media (min-width: 481px) and (max-width: 767px)": {
            width: 160,
            height: 40
          },
        "@media (min-width: 768px) and (max-width: 1024px)": {
            width: 160,
            height: 40
        },
        "@media (min-width: 1025px) and (max-width: 1280px)":{
            width: 200,
            height: 40
        },
        "@media screen and (min-width: 1281px)":{
            width: 200,
            height: 50
        }
    },
    cssLabel: {
        color : '#008037'
      },
    input: {
        color: '#008037',
        height: 40,
        marginBottom: 10
    }
})
