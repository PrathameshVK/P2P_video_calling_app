import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider } from '@material-ui/core';
import { theme } from '../StyledComponents/Theme';
import {motion} from 'framer-motion';


const useStyles=makeStyles({
    btn:{
        color: '#fff',
        backgroundColor: '#008037',
        fontSize: 12,
        width: 90,
        height: 35,
        '&:hover':{
            backgroundColor: '#09a04b',
        },
        "@media (min-height:320px) and (max-width: 767px)": {
            width: 0,
            height: 0
          }
    }
})



function Navbar() {

    const {currentUser, logout}=useAuth();
    const {pathname}=useLocation();
    const classes=useStyles();
    const history=useHistory();

    async function handleLogout(){
        try {
           await logout();
           history.push('/login');
        } catch {
            
        }
    }

    return (
        <div>
            <StyledHeader>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <StyledNavBar>
                <ul>
                {
                    currentUser &&
                    <li>
                        <Link to="/">Home</Link>
                        <Line
                        transition={{duration: 0.30}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/" ? "40%" : "0%"}}/>
                    </li>
                    
                }
                    <li>
                        <Link to="/about">About</Link>
                        <Line
                        transition={{duration: 0.30}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/about" ? "40%" : "0%"}}/>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                        <Line
                        transition={{duration: 0.30}}
                        initial={{width: "0%"}}
                        animate={{width: pathname==="/contact" ? "40%" : "0%"}}/>
                    </li>
                    {currentUser &&
                    <li>
                        <ThemeProvider theme={theme}>
                        <Button
                           className={classes.btn}
                           onClick={handleLogout}
                           variant="contained"
                        >
                            Log out
                        </Button>
                        </ThemeProvider>
                       {/*<Link to="/" onClick={handleLogout}>Log out</Link>*/}
                    </li>
                    }
                </ul>
            </StyledNavBar>
        </StyledHeader>
        </div>
    )
}

const StyledHeader=styled.div`
    z-index: 50;
  display: flex;
  width: 100%;
  min-height: 10vh;
  background-color: black;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: space-between;
  img{
      height: 3em;
      padding-left: 4rem;
      margin: 1rem;
  }

@media (min-width: 1025px) and (max-width: 1280px) {
  min-height: 8vh;
  img{
      height: 2.5em;
      padding-left: 4rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  min-height: 8vh;
  img{
      height: 2.3em;
      padding-left: 4rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  /* CSS */
  
}

@media (min-width: 481px) and (max-width: 767px) {
  min-height: 4vh;
  img{
      height: 2em;
      padding-left: 1rem;
  }
  
}

@media (min-width: 320px) and (max-width: 480px) {
    min-height: 8vh;
  img{
      height: 2em;
      padding-left: 1rem;
  }
  
}
`

const StyledNavBar=styled.div`
 z-index: 50;
    display: flex;
    min-height: 10vh;
    justify-content: space-between;
    margin: auto;
    margin-top: 0;
    align-items: center;
    font-size: 1.2rem;
    ul{
        padding-left: 30rem;
        display: flex;
        list-style: none;
        li{
            padding-left: 3rem;
            position: relative;
        }
        a{
            margin: 1rem;
            text-decoration: none;
            color: white;
            &:hover{
                cursor: pointer;
                color: #008037;
                transition: .2s ease-in;
            }
        }
    }

@media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.2rem;
    ul{
        padding-left: 20rem;
        li{
            padding-left: 2.4rem;
        }
        a{
            margin: .5rem;
        }
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    font-size: 1.1rem;
    ul{
        padding-left: 15rem;
        li{
            padding-left: 2.1rem;
        }
        a{
            margin: .5rem;
        }
    }
}

@media (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 1rem;
    ul{
        padding-left: 10rem;
        li{
            padding-left: 2rem;
        }
        a{
            margin: .5rem;
        }
    }
}
@media (max-width: 768px){
    display: none
}
`

const Line=styled(motion.div)`
    height: 0.1rem;
    background: #008037;
    width: 0%;
    position: absolute;
    bottom: 10%;
    left: 48%;
`

export default Navbar;