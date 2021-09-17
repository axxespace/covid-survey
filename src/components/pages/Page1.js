import React, {useState} from "react";
import img from "../../images/page1.png";
import Buttons from "./additional components/Buttons";
import {PageContainer, FormContainer, BackgroundImage, Form} from "../../global/styled components/globalContainers";

//The component contains Form element's first page
const Page1 = ({...props}) => {
    //these states contain information about every input validation
    const [nameValid, setNameValid] = useState(0);
    const [surnameValid, setSurnameValid] = useState(0);
    const [mailValid, setMailValid] = useState(0);

    //validation function. Is called when we click right button.
    const validFunc = () => {
        const nameObject = document.getElementById("name");
        const surnameObject = document.getElementById("surname");
        const emailObject = document.getElementById("email");

        let nameError, surnameError, mailError;

        if (!nameObject.checkValidity()) {
            const length = nameObject.value.length;
            length < 3 ? nameError = 1 : length > 255 ? nameError = 2 : nameError = 3;
        } else nameError = 0;

        setNameValid(nameError);

        if (!surnameObject.checkValidity()) {
            const length = surnameObject.value.length;
            length < 3 ? surnameError = 1 : length > 255 ? surnameError = 2 : surnameError = 3;
        } else surnameError = 0;

        setSurnameValid(surnameError);

        if (!emailObject.checkValidity()) {
            mailError = 1;
            if (emailObject.value.endsWith("@redberry.ge")) mailError = 2;
        } else mailError = 0;

        setMailValid(mailError);
        //if everything is validated we go to next page
        if (nameError === 0 && surnameError === 0 && mailError === 0) props.setCurrentPage(prev => prev + 1);
    }

    return (
        <PageContainer currentPage={props.currentPage} pageNum={1}>
            <FormContainer>
                <Form>
                    <label><h3>სახელი</h3></label>
                    <input id={"name"} type={"text"} pattern={"[A-Za-zა-ჰ]{3,255}"} placeholder={"იოსებ"} required/>
                    {nameValid === 3 && <p>სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს</p>}
                    {nameValid === 2 && <p>სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან</p>}
                    {nameValid === 1 && <p>სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან</p>}
                    {nameValid === 0 && <p style={{opacity: "0"}}>ველი</p>}
                </Form>

                <Form>
                    <label><h3>გვარი</h3></label>
                    <input type={"text"} id={"surname"} pattern={"[A-Za-zა-ჰ]{3,255}"} placeholder={"ჯუღაშვილი"}
                           required/>
                    {surnameValid === 3 && <p>სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს</p>}
                    {surnameValid === 2 && <p>სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან</p>}
                    {surnameValid === 1 && <p>სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან</p>}
                    {surnameValid === 0 && <p style={{opacity: "0"}}>ველი</p>}
                </Form>

                <Form>
                    <label><h3>მეილი</h3></label>
                    <input type={"email"} id={"email"} pattern="[A-Za-z0-9._%+-]+@redberry\.{1,61}ge$"
                           placeholder={"fb@redberry.ge"} required/>
                    {mailValid === 2 && <p>თქვენ მიერ შეყვანილი მეილი არასწორია</p>}
                    {mailValid === 1 && <p>გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)</p>}
                    {mailValid === 0 && <p style={{opacity: "0"}}>ველი</p>}
                </Form>

                <hr/>

                <h5>*-ით მონიშნული ველების შევსება სავალდებულოა</h5>
            </FormContainer>

            <BackgroundImage src={img} alt={"page1"}/>

            <Buttons {...props} validFunc={validFunc}/>
        </PageContainer>

    );
}

export default Page1;
