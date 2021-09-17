import React from "react";
import styled, {keyframes} from "styled-components/macro";
import {PageContainer} from "../../global/styled components/globalContainers";
import bigLogo from "../../images/logobig.png";

const logoButtonAnim = keyframes`
  100% {
    margin-top: 0;
  }
`;

const bigLogoAnim = keyframes`
  1% {
    border-radius: 50%;
  }
  100% {
    border-radius: 50%;
    bottom: 50px;
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const BigLogo = styled.img`
  position: absolute;
  width: 2000px;
  height: 2000px;
  z-index: 4;
  margin: auto;
  top: -1000px;
  left: -1000px;
  bottom: -1000px;
  right: -1000px;
  animation: ${bigLogoAnim} 1s 1s forwards;
`;

const ElementsContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 455px;
  height: 400px;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 455px;
  height: 200px;
  background: white;
  z-index: 3;
`;

const StartButton = styled.button`
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  width: 180px;
  height: 120px;
  position: relative;
  border: none;
  display: block;
  color: black;
  font-weight: 700;
  font-size: 30px;
  margin: -120px auto;
  z-index: 1;
  animation: ${logoButtonAnim} 1s 1.8s forwards ease-in;

  &:hover {
    text-shadow: 2px 3px 0 #F2F2F2, 2px 4px 0 #000000;
  }
`;

const Start = ({...props}) => {
    const start = () => {
        props.setCurrentPage(prev => prev + 1);
    }

    return (
        <PageContainer currentPage={props.currentPage} pageNum={0}>
            <ElementsContainer>
                <LogoContainer>
                    <BigLogo src={bigLogo} alt={"big logo"}/>
                </LogoContainer>
                <StartButton onClick={start}>კითხვარის დაწყება</StartButton>
            </ElementsContainer>
        </PageContainer>
    )
}

export default Start;
