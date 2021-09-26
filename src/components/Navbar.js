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
                        <Link to="/about">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/projects">About Us</Link>
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
  justify-content: space-between;
  img{
      height: 4em;
      padding-left: 4rem;
      margin: 1rem;
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
`

export default Navbar;