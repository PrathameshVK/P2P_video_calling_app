import styled from "styled-components"

export const StyledMainBody=styled.div`
  display: flex;
  min-height: 76vh;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: white;
    .main{
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
    .form{
        margin: auto;
        text-align: center;
        h2{
            font-size: 2.5rem;
            font-weight: 500;
            color: #CC08FD;
        }
        .input{
            width: 100%;
        }
        p{
            font-size: 1.2rem;
            .link{
                color: #CC08FD;
                text-decoration: none;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
`