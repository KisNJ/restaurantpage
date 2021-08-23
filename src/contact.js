//import {section2} from "./home"

function contactPage(){
    let section=document.querySelector("section");
   
    
    while (section.firstChild) {
    section.removeChild(section.lastChild)
}
}

export {contactPage}