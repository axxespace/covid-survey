import React from "react";
import styled from "styled-components/macro";
import {data} from "../../data/logoData";

const NavbarContainer = styled.div`
  position: absolute;
  left: 200px;
  right: 200px;
  height: 144px;
  z-index: -10;
  border-bottom: 1px solid black;
  
  h2{
    position: absolute;
    right: 2px;
    bottom: 12px;
    font-size: 40px;
    font-weight: 400;
  }
`;

const CompanyName = styled.div`
  position: absolute;
  bottom: 23px;
  .e, .y {
    margin: 0 1px 0 0;
  }
`;

const Letter = styled.img`
  height: 24px;
  width: 18px;
  margin: 0 0 0 2px;
`;

// This component is on the top of the form pages(Page1, Page2, Page3, Page4).
const Navbar = ({...props}) => {
    return (
        <>
            {props.currentPage > 0 && props.currentPage < 5 && <NavbarContainer>
                <CompanyName>
                    {data.map((prop, key) =>
                        <Letter src={prop.image} alt={prop.alt} className={prop.class} key={key}/>
                    )}
                </CompanyName>
                <h2>{props.currentPage}/4</h2>
            </NavbarContainer>}
        </>
    );
}

export default Navbar;
