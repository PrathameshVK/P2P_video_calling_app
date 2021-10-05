import React from 'react'
import { StyledDashBoard } from '../StyledComponents/StyledDashboard';
import about from '../img/about.png'

export default function About() {

    return (
        <div>
            <StyledDashBoard>
            <div className="main-intro">
                <p>Project by</p>
                <p>Prathamesh Kulkarni</p>
            </div>
            <div>
            <img src={about} alt="background"></img>
            </div>
            </StyledDashBoard>
        </div>
    )
}
