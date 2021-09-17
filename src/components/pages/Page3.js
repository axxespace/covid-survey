import React, {useState} from "react";
import styled from "styled-components/macro";
import Buttons from "./additional components/Buttons";
import {PageContainer, FormContainer, BackgroundImage, Form, RadioContainer} from "../../global/styled components/globalContainers";
import img from "../../images/page3.png";
import {isRadioValid} from "../../global/functions/radioValitityFunc";

const LinkContainer = styled.div`
  margin: 39px;
  padding: 0 0 0 45px;
  max-width: 491px;
  
`;

const Emoji = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 5px 0 0;
  transform: scale(1.3);

  &::before {
    content: "👉";
  }
`;

//The component contains Form element's third page
const Page3 = ({...props}) => {
    //these states contain information about every input validation
    const [radioValid1, setRadioValid1] = useState();
    const [radioValid2, setRadioValid2] = useState();
    const [radioValid3, setRadioValid3] = useState();

    const [vaccinated, setVaccinated] = useState();
    const [firstAndRegistered, setFirstAndRegistered] = useState();
    const [planning, setPlanning] = useState();

    //validation function. Is called when we click right button.
    const validFunc = () => {
        const radioObject1 = document.getElementsByName("yesNo3");
        const radioObject2 = document.getElementsByName("stage");
        const radioObject3 = document.getElementsByName("waitingFor");

        const radioValid1 = isRadioValid(radioObject1);
        setRadioValid1(radioValid1);

        const radioValid2 = vaccinated === true ? isRadioValid(radioObject2) : true;
        setRadioValid2(radioValid2);

        const radioValid3 = vaccinated === false ? isRadioValid(radioObject3) : true;
        setRadioValid3(radioValid3);

        //if everything is validated we go to next page
        if (radioValid1 && radioValid2 && radioValid3) props.setCurrentPage(prev => prev + 1);

    }

    // we need following functions to open next step radios if we click on needed button
    const checkVaccination = (prop) => {
        setRadioValid1(true);
        if (prop.target.value === "yes") {
            setVaccinated(true);
            setPlanning(undefined);
        }
        else {
            setVaccinated(false);
            setFirstAndRegistered(false);
        }
    }

    const stage = (prop) => {
        if(prop.target.value === "first dose and not registered") setFirstAndRegistered(true);
        else setFirstAndRegistered(false);
    }

    const vaccinePlan = (prop) => {
        if(prop.target.value === "doesn't want") setPlanning(true);
        else if(prop.target.value === "planning") setPlanning(false);
        else setPlanning(undefined);
    }

    return (
        <PageContainer currentPage={props.currentPage} pageNum={3}>
            <FormContainer>
                <Form>
                    <h4>უკვე აცრილი ხარ?</h4>
                    <RadioContainer>
                        <input type="radio" id="yes3" name="yesNo3" value="yes" onChange={checkVaccination} required/>
                        <label htmlFor="yes3"><p>კი</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="no3" name="yesNo3" value="no" onChange={checkVaccination}/>
                        <label htmlFor="no3"><p>არა</p></label>
                    </RadioContainer>
                    {radioValid1 === false && <p>აირჩიეთ ერთ-ერთი ვარიანტი</p>}
                </Form>

                {vaccinated === true && <Form>
                    <h4>აირჩიე რა ეტაპზე ხარ*</h4>
                    <RadioContainer>
                        <input type="radio" id="firstAndRegistered" name="stage" value="first dose and registered"
                               onChange={stage} required/>
                        <label htmlFor="firstAndRegistered"><p>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="fullyVaccinated" name="stage" value="fully vaccinated"
                               onChange={stage}/>
                        <label htmlFor="fullyVaccinated"><p>სრულად აცრილი ვარ</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="firstAndNotRegistered" name="stage"
                               value="first dose and not registered" onChange={stage}/>
                        <label htmlFor="firstAndNotRegistered"><p>პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</p>
                        </label>
                    </RadioContainer>
                    {radioValid2 === false && <p>აირჩიეთ ერთ-ერთი ვარიანტი</p>}
                </Form>}

                {vaccinated === false && <Form>
                    <h4>რას ელოდები?*</h4>
                    <RadioContainer>
                        <input type="radio" id="amAlready" name="waitingFor" value="already registered"
                               onChange={vaccinePlan} required/>
                        <label htmlFor="amAlready"><p>დარეგისტრირებული ვარ და ველოდები რიცხვს</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="notGoing" name="waitingFor" value="doesn't want" onChange={vaccinePlan}/>
                        <label htmlFor="notGoing"><p>არ ვგეგმავ</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="planning" name="waitingFor" value="planning" onChange={vaccinePlan}/>
                        <label htmlFor="planning"><p>გადატანილი მაქვს და ვგეგმავ აცრას</p></label>
                    </RadioContainer>
                    {radioValid3 === false && <p>აირჩიეთ ერთ-ერთი ვარიანტი</p>}
                </Form>}

                {firstAndRegistered && <LinkContainer>
                    <h3>რომ არ გადადო,</h3>
                    <h3>ბარემ ახლავე დარეგისტრირდი</h3>
                    <a href="https://booking.moh.gov.ge/" target="_blank"
                       rel="noreferrer">https://booking.moh.gov.ge/</a>
                </LinkContainer>}

                {planning === true && <LinkContainer>
                    <Emoji/>
                    <a href="https://booking.moh.gov.ge/" target="_blank"
                       rel="noreferrer">https://booking.moh.gov.ge/</a>
                </LinkContainer>}

                {planning === false && <LinkContainer>
                    <h3>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</h3>
                    <br/>
                    <h3>რეგისტრაციის ბმული</h3>
                    <Emoji/>
                    <a href="https://booking.moh.gov.ge/" target="_blank"
                       rel="noreferrer">https://booking.moh.gov.ge/</a>
                </LinkContainer>}
            </FormContainer>
            <BackgroundImage src={img} alt={"page3"} style={{top: "150px"}}/>
            <Buttons {...props} validFunc={validFunc}/>
        </PageContainer>
    )
}

export default Page3;
