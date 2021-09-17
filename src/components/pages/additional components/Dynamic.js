import React from "react";
import styled from "styled-components/macro";
import star from "../../../images/star.png";
import heart from "../../../images/heart.png"

const PageAnimation = styled.div`
  z-index: ${({page}) => page === 5 ? "0" : "10"};
  transition: all .5s;
  transition-property: top, left, height, width;
  position: absolute;
  top: ${({page}) => page === 0 ? "calc(50% - 25px)" : page === 1 ? "320px" : page === 2 ? "345px" : page === 3 ? "140px" : page === 4 ? "205px" : "0"};
  left: ${({page}) => page === 0 ? "calc(50% - 50px)" : page === 1 ? "1050px" : page === 2 ? "925px" : page === 3 ? "900px" : page === 4 ? "1000px" : "0"};
  width: ${({page}) => page === 0 ? "100px" : page === 1 ? "490px" : page === 2 ? "210px" : page === 3 ? "290px" : page === 4 ? "220px" : "100%"};
  height: ${({page}) => page === 0 ? "50px" : page === 1 ? "90px" : page === 2 ? "210px" : page === 3 ? "310px" : page === 4 ? "220px" : "100%"};
  background: ${({page}) => page === 1 ? "rgba(238, 238, 0, .5)" : page === 2 ? "rgba(255, 0, 0, .5)" : page === 5 ? "#232323" : "transparent"};
  border-radius: ${({page}) => page === 2 ? "50%" : null};
  background-image: url(${({page}) => page === 3 ? star : page === 4 ? heart : null});
  background-size: cover;
  opacity: ${({page}) => page === 3 || page === 4 ? ".7" : null};
  transform: rotate(${({page}) => page === 4 ? "-15deg" : null});
`;

// Only Form element contains this element.
// This element contains just one div that manipulates form pages(Page 1, Page2, Page3, Page4) dynamic background.
const Dynamic = ({...props}) => {
    return (
        <PageAnimation page={props.currentPage}/>
    );
}

export default Dynamic;
