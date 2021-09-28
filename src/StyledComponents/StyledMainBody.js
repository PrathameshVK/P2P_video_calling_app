import styled from "styled-components"

export const StyledMainBody = styled.div`
  min-height: 76vh;
  color: white;
  .main {
    margin: auto;
    span {
      color: #cc08fd;
    }
    p {
      span {
        color: #008037;
      }
    }
  }
  .form {
    margin: auto;
    h2 {
      color: #cc08fd;
    }
    .input {
      width: 20%;
    }
    p {
      .link {
        color: #cc08fd;
        text-decoration: none;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (min-width: 1281px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 15rem;
    .main {
      text-align: left;
      width: 50%;
      margin: auto;
      font-size: 2.5rem;
      font-weight: 600;
      p {
        font-size: 2rem;
        font-weight: 300;
      }
    }
    .form {
      text-align: center;
      width: 50%;
      h2 {
        font-size: 2.4rem;
        font-weight: 500;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
    .main {
      text-align: left;
      width: 50%;
      margin: auto;
      font-size: 2.4rem;
      font-weight: 600;
      p {
        font-size: 1.8rem;
        font-weight: 300;
      }
    }
    .form {
      text-align: center;
      width: 50%;
      h2 {
        font-size: 1.8rem;
        font-weight: 500;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 6rem;
    .main {
      text-align: left;
      width: 50%;
      margin: auto;
      font-size: 2rem;
      font-weight: 600;
      p {
        font-size: 1.4rem;
        font-weight: 300;
      }
    }
    .form {
      text-align: center;
      width: 50%;
      h2 {
        font-size: 1.8rem;
        font-weight: 500;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .main {
      text-align: center;
      margin-top: 20vh;
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      p {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    .form {
      text-align: center;
      width: 80vw;
      h2 {
        font-size: 1.8rem;
        font-weight: 500;
      }
      p {
        font-size: 1rem;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .main {
      text-align: center;
      padding-top: 20vh;
      width: 100%;
      font-size: 1.5rem;
      font-weight: 600;
      p {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    .form {
      text-align: center;
      width: 80vw;
      h2 {
        font-size: 1.8rem;
        font-weight: 500;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;