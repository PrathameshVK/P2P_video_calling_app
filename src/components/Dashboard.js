import React from 'react';
import { StyledDashBoard } from '../StyledComponents/StyledDashboard';
import { theme } from '../StyledComponents/Theme';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import mainbg from '../img/mainbg.png';

const useStyles=makeStyles({  
    field:{
        width: 200,
        border: '#008037',
        marginLeft: 20
    }, 
    btn:{
        color: '#fff',
        backgroundColor: '#008037',
        height: 50,
        width: 200,
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
        },
        marginTop: 2,
        height: 50,
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

export default function Dashboard() {
    const classes=useStyles();
    
    return (
        <StyledDashBoard>
           <div className="main-intro">
                Your <span className="personal">personal</span><br></br>
                video chatting room
                <br/><br/>
                <div className="options">
                <ThemeProvider theme={theme}>
                <Button className={classes.btn} variant="contained">New Call</Button>
                <TextField
                autoComplete="off"
                    id="standard-basic"
                    label="Join call"
                    className={classes.field}
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
                />
                </ThemeProvider>
                </div>
            </div>
            <div>
                <img src={mainbg} alt="background image"></img>
            </div>
        </StyledDashBoard>
    )
}