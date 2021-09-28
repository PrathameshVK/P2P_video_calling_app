import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

function Navbar() {
    const {currentUser, logout}=useAuth();

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
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <a onClick={handleLogout}>{currentUser && `Log out`}</a>
                    </li>
                </ul>
            </StyledNavBar>
        </StyledHeader>
        </div>
    )
}

const StyledHeader=styled.div`
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
        padding-left: 25rem;
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

export default Navbar;