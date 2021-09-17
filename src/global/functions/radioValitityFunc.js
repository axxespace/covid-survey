// this function is called in validFunc of all the form pages (Page1, Page2, Page3, Page4)

export const isRadioValid = (object) => {
    for (let i = 0; i < object.length; i++) {
        if (object[i].checked) return true;
    }
    return false;
}
