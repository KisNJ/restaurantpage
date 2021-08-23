//import {section} from "./home"

function menuPage(){
    let section=document.querySelector("section");
   
    
        while (section.firstChild) {
        section.removeChild(section.lastChild)
    }

}

export {menuPage}