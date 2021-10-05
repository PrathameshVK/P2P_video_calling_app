import styled from "styled-components";

export const StyledDashBoard = styled.div`
  color: white;
  padding-top: 15vh;
  display: flex;
  min-height: 76vh;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  overflow: hidden;
  a{
    text-decoration: none;
  }
  .main-intro {
    width: 50%;
    font-size: 2.5rem;
    font-weight: 600;
    .personal {
      color: #cc08fd;
    }
    p {
      font-size: 2rem;
      font-weight: 400;
      span {
        color: #008037;
      }
    }
    .options {
      display: flex;
      align-items: center;
    }
  }
  img {
    width: 40vw;
    height: auto;
  }
  
  @media (min-width: 1025px) and (max-width: 1280px) {
    /* CSS */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 2vh;
    padding: 5rem 6rem;
    .main-intro {
      width: 50%;
      font-size: 1.8rem;
      text-align: left;
      p {
        font-size: 2rem;
        span {
          color: #008037;
        }
      }
    }
    img {
      width: 40vw;
      height: auto;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* CSS */
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 2vh;
    flex-direction: column-reverse;
    padding: 5rem 2rem;
    .main-intro {
      width: 70%;
      font-size: 1.8rem;
      text-align: center;
      p {
        font-size: 2rem;
        span {
          color: #008037;
        }
      }
    }
    img {
      width: 48vw;
      height: auto;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 5rem 2rem;
    .main-intro {
      width: 100%;
      font-size: 1.8rem;
      text-align: center;
      p {
        font-size: 2rem;
        span {
          color: #008037;
        }
      }
    }
    img {
      width: 80vw;
      height: auto;
    }
  }
`;
