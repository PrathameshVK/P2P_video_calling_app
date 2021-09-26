import React from 'react';
import styled from 'styled-components';

export default function Signup() {
    const theme=useTheme(muitheme);
    return (
        <>
            <StyledMainBody>
                <div className="main-intro">
                    Your <span>personal</span><br></br>
                    video chatting room
                    <p>Sign up now and get <span>connected</span></p>
                </div>
                <div className="signup-form">
                    <h2>Sign in</h2>
                    
                </div>
            </StyledMainBody>
        </>
    )
}

const StyledMainBody=styled.div`
  display: flex;
  min-height: 76vh;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
    .main-intro{
        width: 50%;
        font-size: 2.5rem;
        font-weight: 600;
        span{
            color: #CC08FD;
        }
        p{
            font-size: 2rem;
            font-weight: 400;
            span{
                color: #008037;
            }
        }
    }
    .signup-form{
        text-align: center;
        h2{
            font-size: 2.5rem;
            font-weight: 500;
            color: #CC08FD;
        }
        .input{
            width: 100%;
        }
    }
`