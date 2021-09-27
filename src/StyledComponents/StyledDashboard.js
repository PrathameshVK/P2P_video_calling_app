import styled from 'styled-components';

export const StyledDashBoard=styled.div`
    color: wheat;
    padding-top: 15vh;
    display: flex;
    min-height: 76vh;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
    overflow: hidden;
    .main-intro{
        width: 50%;
        font-size: 2.5rem;
        font-weight: 600;
        .personal{
            color: #CC08FD;
        }
        p{
            font-size: 2rem;
            font-weight: 400;
            span{
                color: #008037;
            }
        }
        .options{
            display: flex;
            align-items: center;
        }
    }
    img{
        width: 40vw;
        height: auto;
    }
`