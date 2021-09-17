import React, {useState} from "react";
import styled from "styled-components/macro";
import {
    PageContainer,
    FormContainer,
    BackgroundImage,
    Form,
    RadioContainer
} from "../../global/styled components/globalContainers";
import Buttons from "./additional components/Buttons";
import {isRadioValid} from "../../global/functions/radioValitityFunc";
import img from "../../images/page4.png";

const TextArea = styled.textarea`
  resize: none;
  width: 622px;
  height: 184px;
  padding: 20px;
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0;
`;

const Submit = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  height: 56px;
  width: 180px;
  position: relative;
  border: none;
  display: block;
  margin: 54px 0 0 auto;
  border-radius: 42px;
  background: #208298;
  color: white;
  z-index: 3;
  font-weight: 700;
  font-size: 18px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgb(32, 170, 152);
    transition: all .3s;
    z-index: -2;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`

//The component contains Form element's fourth page
const Page4 = ({...props}) => {

    //these states contain information about every input validation
    const [radioValid1, setRadioValid1] = useState();
    const [radioValid2, setRadioValid2] = useState();

    //validation function. Is called when we click right button.
    const validFunc = () => {
        const radioObject1 = document.getElementsByName("frequency");
        const radioObject2 = document.getElementsByName("officeWork");

        const radioValid1 = isRadioValid(radioObject1);
        setRadioValid1(radioValid1);

        const radioValid2 = isRadioValid(radioObject2);
        setRadioValid2(radioValid2);

        //if everything is validated we go to next page
        if (radioValid1 && radioValid2) props.setCurrentPage(prev => prev + 1);
    }

    return (
        <PageContainer id={"yle"} currentPage={props.currentPage} pageNum={4}>
            <FormContainer>
                <h2>რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
                    თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის
                    მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის.
                </h2>
                <h2>პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც
                    გაიშვიათდა.
                </h2>
                <br/>
                <Form>
                    <h2>რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ
                        ჩაერთვება?*</h2>
                    <RadioContainer>
                        <input type="radio" id="twiceWeek" name="frequency" value="twice a week" required/>
                        <label htmlFor="twiceWeek"><p>კვირაში ორჯერ</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="onceWeek" name="frequency" value="once a week"/>
                        <label htmlFor="onceWeek"><p>კვირაში ერთხელ</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="onceTwoWeeks" name="frequency" value="once in two weeks"/>
                        <label htmlFor="onceTwoWeeks"><p>ორ კვირაში ერთხელ</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="onceMonth" name="frequency" value="once in a month"/>
                        <label htmlFor="onceMonth"><p>თვეში ერთხელ</p></label>
                    </RadioContainer>
                    {radioValid1 === false && <p>აირჩიეთ ერთ-ერთი ვარიანტი</p>}
                    {radioValid1 !== false && <p style={{opacity: "0"}}>ველი</p>}
                </Form>

                <Form>
                    <h2>კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</h2>
                    <RadioContainer>
                        <input type="radio" id="null" name="officeWork" value="0" required/>
                        <label htmlFor="null"><p>0</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="one" name="officeWork" value="1"/>
                        <label htmlFor="one"><p>1</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="two" name="officeWork" value="2"/>
                        <label htmlFor="two"><p>2</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="three" name="officeWork" value="3"/>
                        <label htmlFor="three"><p>3</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="four" name="officeWork" value="4"/>
                        <label htmlFor="four"><p>4</p></label>
                    </RadioContainer>

                    <RadioContainer>
                        <input type="radio" id="five" name="officeWork" value="5"/>
                        <label htmlFor="five"><p>5</p></label>
                    </RadioContainer>
                    {radioValid2 === false && <p>აირჩიეთ ერთ-ერთი ვარიანტი</p>}
                    {radioValid2 !== false && <p style={{opacity: "0"}}>ველი</p>}
                </Form>

                <Form>
                    <h2>რას ფიქრობ ფიზიკურ შეკრებებზე?</h2>
                    <TextArea rows="5" cols="33"/>
                </Form>

                <Form>
                    <h2>რას ფიქრობ არსებულ გარემოზე:
                        რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</h2>
                    <TextArea rows="5" cols="33"/>
                </Form>
                <Submit type="button" value="Save" onClick={validFunc}>დასრულება</Submit>

            </FormContainer>
            <BackgroundImage src={img} alt={"page4"} style={{top: "130px"}}/>
            <Buttons {...props}/>
        </PageContainer>
    );
}

export default Page4;
