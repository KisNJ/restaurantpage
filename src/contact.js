//import {section2} from "./home"

function contactPage(){
    let section=document.querySelector("section");
   
    
    while (section.firstChild) {
    section.removeChild(section.lastChild)
    }
    let footer=document.querySelector("footer");
    while (footer.firstChild) {
        footer.removeChild(footer.lastChild)
    }

    
    let body = document.querySelector("body");
    
   
    let mainContactDiv = document.createElement("div");
    mainContactDiv.id = "mainMenu";
    let ownerDiv = document.createElement("div");
    ownerDiv.id = "goulash";
    let chefDiv = document.createElement("div");
    chefDiv.id = "schnitzel";
    ownerDiv.className = "food";
    chefDiv.className = "food";

    let div1 = document.createElement("div");
    div1.textContent = "Nagy Béla";
    let div2 = document.createElement("div");
    div2.textContent = "Owner";
    let img = document.createElement("img");
    img.setAttribute("src", "/home/dev/Downloads/owner.jpg");
    


    ownerDiv.appendChild(img);
    ownerDiv.appendChild(div1);
    ownerDiv.appendChild(div2);


    let div3 = document.createElement("div");
    div3.textContent = "Miksa Szabolcs";
    let div4 = document.createElement("div");
    div4.textContent = "Chef";
    let img2 = document.createElement("img");
    img2.setAttribute("src", "/home/dev/Downloads/chef.jpg");
   

    chefDiv.appendChild(img2);
    chefDiv.appendChild(div3);
    chefDiv.appendChild(div4);

    mainContactDiv.appendChild(ownerDiv);
    mainContactDiv.appendChild(chefDiv);

    
    section.appendChild(mainContactDiv);
    body.appendChild(section);
    /*footer.textContent="Hungarian Restaurant";
    body.appendChild(footer);*/

    footer.textContent="Hungarian Restaurant";
    body.appendChild(footer);

}
export {contactPage}