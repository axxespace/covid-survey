import styled from "styled-components/macro";

// this file contains all the containers components that we
// use in all the form pages(Page1, Page2, Page3, Page4), Start, End components

export const PageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${({currentPage}) => currentPage === 4 ? "2000px" : "100vh"};
  transition: opacity .5s;
  opacity: ${({currentPage, pageNum}) => currentPage === pageNum ? "1" : "0"};
  visibility: ${({currentPage, pageNum}) => currentPage === pageNum ? "visible" : "hidden"};
  overflow: hidden;
`;

//container of all inputs on form page(Form1, Form2, Form3, Form 4)
export const FormContainer = styled.fieldset`
  border: none;
  position: absolute;
  left: 200px;
  top: 186px;
  margin-bottom: 300px;
  max-width: 650px;

  hr {
    width: 237px;
    margin: 85px 0 20px 0;
  }

  h5 {
    font-size: 16px;
    width: 337px;
    font-weight: bold;
    color: grey;
  }
  
  & > h4{
    max-width: 347px;
    font-size: 20px;
    font-weight: 400;
  }
  
  & > h3{
    max-width: 490px;
    font-size: 20px;
    font-weight: 400;
  }

  & > h2{
    max-width: 606px;
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 20px 0;
  }
  
  a{
    position: relative;
    font-size: 20px;
    text-decoration: none;
    color: blue;
  }
`;

//container input section on form page(Form1, Form2, Form3, Form 4)
export const Form = styled.div`
  & ~ div {
    margin: 48px 0 0 0;
  }

  & > input {
    margin: 19px 0 0 15px;
    width: 513px;
    height: 50px;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
    position: relative;
    display: block;
  }

  & > p {
    margin: 10px 20px;
    color: red;
  }

  h4{
    width: 596px;
    font-size: 22px;
    font-weight: 700;
  }
  
  h2{
    font-size: 22px;
    font-weight: 700;
    width: 622px;
  }

  label {
    position: relative;
    
    h3 {
      font-size: 22px;
      font-weight: 700;
    }

    h3:after {
      content: "*";
    }
    
    & + input{
      margin: 19px 0 0 0;
    }
  }
  
  input[type=date]::-webkit-inner-spin-button,
  input[type=date]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

//container of each radio element
export const RadioContainer = styled.div`
  label{
    cursor: pointer;
  }
  
  p {
    display: inline-block;
    position: relative;
    margin: 0 19px;
    font-size: 20px;
    font-weight: 400;
  }

  input[type=radio] {
    width: 15px;
    height: 15px;
    margin: 19px 0 0 15px;
    opacity: 0;
  }

  input[type=radio] ~ label ::before{
    cursor: pointer;
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    left: -21px;
    top: -5px;
    -webkit-box-shadow: 0 0 0 2px #000000;
    box-shadow: 0 0 0 2px #000000;  
  }

  input[type=radio]:checked ~ label::after{
    cursor: pointer;
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 20px;
    background: black;
    left: -18px;
    top: -2px;
  }
`;

//form pages (Form1, Form2, Form3, Form 4) background image container
export const BackgroundImage = styled.img`
  position: absolute;
  top: 94px;
  left: 851px;
  width: 904px;
  height: 831px;
`;
