import React, {useState, useEffect} from "react";
import {PageContainer, FormContainer, BackgroundImage, Form, RadioContainer} from "../../global/styled components/globalContainers";
import Buttons from "./additional components/Buttons";
import img from "../../images/page2.png";
import {isRadioValid} from "../../global/functions/radioValitityFunc";

//The component contains Form element's second page
const Page2 = ({...props}) => {
    const [hadCovid, setHadCovid] = useState();
    const [hadTest, setHadTest] = useState();

    //these states contain information about every input validation
    const [radioValid1, setRadioValid1] = useState();
    const [radioValid2, setRadioValid2] = useState();
    const [testDateValid, setTestDateValid] = useState();
    const [antigensNumberValid, setAntigensNumberValid] = useState();
    const [covidDateValid, setCovidDateValid] = useState();

    const date = new Date().toISOString().split("T")[0];

    //validation function. Is called when we click right button.
    const validFunc = () => {
        const radioObject1 = document.getElementsByName("yesNo");
        const radioObject2 = document.getElementsByName("yesNo1");
        const testNumberObject = document.getElementById("testNumber");
        const antigensNumberObject = document.getElementById("antigensNumber");
        const covidDateObject = document.getElementById("covidDate");

        const radioValid1 = isRadioValid(radioObject1);
        setRadioValid1(radioValid1);

        const radioValid2 = hadCovid ? isRadioValid(radioObject2) : true;
        setRadioValid2(radioValid2);

        const testNumberValid = hadTest ? testNumberObject.checkValidity() : true;
        setTestDateValid(testNumberValid);

        const antigensNumberValid = hadTest ? antigensNumberObject.checkValidity() : true;
        setAntigensNumberValid(antigensNumberValid);

        const covidDateValid = hadTest === false ? covidDateObject.checkValidity() : true;
        setCovidDateValid(covidDateValid);

        //if everything is validated we go to next page
        if (radioValid1 && radioValid2 && testNumberValid && antigensNumberValid && covidDateValid) props.setCurrentPage(prev => prev + 1);
    }

    // we need following functions to open next step radios if we click on needed button
    const covidYes = (prop) => {
        if(prop.target.value === "yes") {
            setHadCovid(true);
            setRadioValid1(true);
        }
        else {
            setHadCovid(false);
            setHadTest(undefined);
            setRadioValid1(true);
        }
    }

    const done = (prop) => {
        if(prop.target.value === "yes"){
            setHadTest(true);
            setRadioValid2(true);
        }
        else {
            setHadTest(false);
            setRadioValid2(true);
        }
    }

    useEffect(() => {
        const obj1 = document.getElementById('testNumber');
        const obj2 = document.getElementById('covidDate');

        //here we change input text type to date on focus, if radio is opened
        if (hadTest) {
            obj1.onfocus = () => {
                obj1.type = "date";
            }
            setTestDateValid(true);
            setAntigensNumberValid(true);
        }

        else if (hadTest === false) {
            obj2.onfocus = () => {
                obj2.type = "date";
                obj2.placeholder="dd-mm-yyyy";
            }
            setCovidDateValid(true);
        }
    }, [hadTest]);

    return (
        <PageContainer currentPage={props.currentPage} pageNum={2}>
            <FormContainer>
                <Form>
                    <h4>გაქვს გადატანილი Covid-19?*</h4>
                    <RadioContainer>
                        <input type="radio" id="yes" name="yesNo" value="yes" onChange={covidYes} required/>
                        <label htmlFor="yes"><p>კი</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="no" name="yesNo" value="no" onChange={covidYes}/>
                        <label htmlFor="no"><p>არა</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="having" name="yesNo" value="having" onChange={covidYes}/>
                        <label htmlFor="having"><p>ახლა მაქვს</p></label>
                    </RadioContainer>
                    {radioValid1 === false && <p>აირჩიეთ ერთ-ერთი ვარიანტი</p>}
                </Form>

                {hadCovid && <Form>
                    <h4>ანტისხეულების ტესტი გაქვს გაკეთებული?*</h4>
                    <RadioContainer>
                        <input type="radio" id="yes1" name="yesNo1" value="yes" onChange={done} required/>
                        <label htmlFor="yes1"><p>კი</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="no1" name="yesNo1" value="no" onChange={done}/>
                        <label htmlFor="no1"><p>არა</p></label>
                    </RadioContainer>
                    {radioValid2 === false && <p>აირჩიეთ ერთ-ერთი ვარიანტი</p>}
                </Form>}
                {hadTest && <Form>
                    <h4>თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*</h4>
                    <input type={"text"} id={"testNumber"} placeholder={"რიცხვი"} min={"2020-01-07"} max={date} required/>
                    <input type={"number"} id={"antigensNumber"} placeholder={"ანტისხეულების რაოდენობა"} required/>
                    {testDateValid === false && <p>შეიყვანეთ თარიღი 07.01.2020-დან დღევანდელ რიცხვამდე</p>}
                    {antigensNumberValid === false && <p>შეიყვანეთ ანტისხხეულების რაოდენობა</p>}
                </Form>}
                {hadTest === false && <Form>
                    <h4>მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*</h4>
                    <input type="text" id={"covidDate"} placeholder={"რიცხვი"} min={"2020-01-07"} max={date} required/>
                    {covidDateValid === false && <p>შეიყვანეთ თარიღი 07.01.2020-დან დღევანდელ რიცხვამდე</p>}
                </Form>}
            </FormContainer>
            <BackgroundImage src={img} alt={"page2"} style={{top: "130px"}}/>
            <Buttons {...props} validFunc={validFunc}/>
        </PageContainer>
    )
}


export default Page2;
