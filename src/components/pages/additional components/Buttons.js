import React, {useEffect} from "react";
import styled from "styled-components/macro";
import right from "../../../images/right.png";
import left from "../../../images/left.png";

const Container = styled.div`
  position: fixed;
  left: calc(50% - 72.5px);
  bottom: 104px;
  width: 145px;
  display: flex;
  justify-content: space-between;
  z-index: 2;

  #rightButton {
    margin-left: auto;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const ButtonImage = styled.img`
  width: 14px;
  height: 21px;
`;

// All the pages(Page1, Page2, Page 3, Page4) contain Buttons element.
// All the pages(Page 1, Page2, Page3, Page4) pass Buttons element validFunc() function, that checks it's all input element validity
const Buttons = ({...props}) => {
    //we don't need to check validity when we go to previous page
    const leftClick = () => {
        props.setCurrentPage((prev) => prev - 1);
    }
    return (
        <Container>
            {props.currentPage !== 1 &&
            <Button type={"button"} id={"leftButton"} onClick={leftClick}> <ButtonImage src={left}/> </Button>}
            {props.currentPage !== 4 &&
            <Button type={"button"} id={"rightButton"} onClick={props.validFunc}> <ButtonImage src={right}/> </Button>}
        </Container>
    )
}

export default Buttons;
