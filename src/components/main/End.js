import React from "react";
import styled, {keyframes} from "styled-components/macro";
import {PageContainer} from "../../global/styled components/globalContainers";
import star from "../../images/tinystar.png";

const bigStartAnima = keyframes`
  100%{
    bottom: 110px;
  }
`;

const tinyStarAnim = keyframes`
  100%{
    bottom: -30px;
    left: 90px;
  }
`;

const visibilityAnim = keyframes`
  100%{
    visibility: visible;
  }
`

const ThanksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -2;

  h1 {
    visibility: hidden;
    color: white;
    font-weight: bold;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: 0.24em;
    background: #232323;
    position: relative;
    z-index: 1;
    animation: ${visibilityAnim} 1s 1s forwards;
  }
  
  p{
    position: relative;
    color: #232323;
  }
  
  p::before{
    content: "";
    position: absolute;
    height: 52px;
    width: 52px;
    background-image: url(${star});
    right: 120px;
    animation: ${({page}) => page === 5 ? bigStartAnima : null} 1s 1s forwards;
    bottom: 20px;
  }

  p::after{
    content: "";
    position: absolute;
    height: 33px;
    width: 33px;
    bottom: 40px;
    background-image: url(${star});
    background-size: cover;
    animation: ${({page}) => page === 5 ? tinyStarAnim : null} 1s 1s forwards;
    left: 30px;
  }
`;
// This is ending page component
const End = ({...props}) => {
    return (
        <PageContainer currentPage={props.currentPage} pageNum={5}>
            <ThanksContainer page={props.currentPage}>
                <h1>მადლობა</h1>
                <p>aaa</p>
            </ThanksContainer>
        </PageContainer>
    );
}

export default End
