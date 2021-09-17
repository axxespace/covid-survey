import React, {useRef} from "react";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Dynamic from "../pages/additional components/Dynamic";

// this component contains all form pages(Page1, Page2, Page3, Page4) and pages dynamic animation
const Form = ({...props}) => {
    const formRef = useRef();
    return(
      <form ref={formRef} action="#" noValidate>
          <Page1 {...props}/>
          <Page2 {...props}/>
          <Page3 {...props}/>
          <Page4 {...props} formRef={formRef}/>
          <Dynamic {...props}/>
      </form>
    );
}

export default Form;
