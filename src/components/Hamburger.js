import React from 'react';
import { slide as Menu } from "react-burger-menu";
import styled from 'styled-components';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "20px"
    },
    bmBurgerBars: {
      background: "white",
      height: 5,
      width: 30,
      borderRadius: "50px"
    },
    bmCrossButton: {
      height: "24px",
      width: "24px"
    },
    bmCross: {
      background: "white"
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%"
    },
    bmMenu: {
      background: "#222222",
      overflow: 'hidden',
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em"
    },
    bmMorphShape: {
      fill: "#373a47"
    },
    bmItemList: {
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      padding: "0.8em"
    },
    bmItem: {
      margin: 10,
      fontSize: 20,
      color: "white",
      textDecoration: "none",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)"
    }
  };


export default function Hamburger() {
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
            <StyledHam>
                <Menu right styles={styles} width={280}>
                {
                    currentUser &&
                        <Link to="/">Home</Link>
                }
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/" onClick={handleLogout}>{currentUser && `Log out`}</Link>
                </Menu>
            </StyledHam>
    )
}

const StyledHam=styled.div`
    @media (min-width: 768px){
        display: none
    }
    @media (max-width: 768px) {
        display: block
    }
`