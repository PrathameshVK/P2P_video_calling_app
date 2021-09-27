import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import {Link, useHistory} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';

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
                        <Link to="/about"><ContactSupportIcon className="svg_icons"/></Link>
                    </li>
                    <li>
                        <Link to="/projects"><InfoIcon className="svg_icons"/></Link>
                    </li>
                    <li>
                        <a onClick={handleLogout}>{currentUser && `Log out`}</a>
                    </li>
                </ul>
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
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
  /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  /* CSS */
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
  min-height: 8vh;
  img{
      height: 2.5em;
      padding-left: 4rem;
  }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
  min-height: 8vh;
  img{
      height: 2.3em;
      padding-left: 4rem;
  }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
  /* CSS */
  
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
  min-height: 4vh;
  img{
      height: 2em;
      padding-left: 1rem;
  }
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

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
        .svg_icons{
        transform: scale(1.4);
        }
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
    /* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  /* CSS */
  
}

/* 
  ##Device = Laptops, Desktops
  ##Screen = B/w 1025px to 1280px
*/

@media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.2rem;
    ul{
        padding-left: 25rem;
        .svg_icons{
            transform: scale(1.2);
        }
        li{
            padding-left: 2.4rem;
        }
        a{
            margin: .5rem;
        }
    }
}

/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.1rem;
    ul{
        padding-left: 15rem;
        .svg_icons{
            transform: scale(1.4);
        }
        li{
            padding-left: 2.1rem;
        }
        a{
            margin: .5rem;
        }
    }
}

/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 1.1rem;
    ul{
        padding-left: 15rem;
        .svg_icons{
            transform: scale(1.4);
        }
        li{
            padding-left: 2.1rem;
        }
        a{
            margin: .5rem;
        }
    }
}

/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
    font-size: 1rem;
    ul{
        padding-left: 6rem;
        .svg_icons{
            transform: scale(1.2);
        }
        li{
            padding-left: 1rem;
        }
        a{
            margin: .5rem;
        }
    }
  
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
    font-size: .8rem;
    ul{
        padding-left: .5rem;
        .svg_icons{
            transform: scale(1);
        }
        li{
            padding-left: 1rem;
        }
        a{
            margin: .1rem;
        }
    }
}
`

export default Navbar;