import {GlobalStyles} from "./global/styled components/globalStyles";
import {useState} from "react";
import Start from "./components/main/Start";
import Form from "./components/main/Form";
import End from "./components/main/End";
import Navbar from "./components/main/Navbar";

function App() {
    const [currentPage, setCurrentPage] = useState(0); //current page number(0 - first page, 5 - last page)
    const props = {currentPage, setCurrentPage};
    return (
        <>
            <GlobalStyles/>
            <Navbar {...props}/>
            <Start {...props}/>
            <Form {...props}/>
            <End {...props}/>
        </>
    );
}

export default App;
