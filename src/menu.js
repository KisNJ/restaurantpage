//import {section} from "./home"

function menuPage() {
    let section = document.querySelector("section");
    let body = document.querySelector("body");
    
    while (section.firstChild) {
        section.removeChild(section.lastChild)
    }
    let footer=document.querySelector("footer");
    while (footer.firstChild) {
        footer.removeChild(footer.lastChild)
    }
    let mainMenuDiv = document.createElement("div");
    mainMenuDiv.id = "mainMenu";
    let goulashDiv = document.createElement("div");
    goulashDiv.id = "goulash";
    let schnitzelDiv = document.createElement("div");
    schnitzelDiv.id = "schnitzel";
    goulashDiv.className = "food";
    schnitzelDiv.className = "food";

    let div1 = document.createElement("div");
    div1.textContent = "Tasty Hungarian Goulash";
    let div2 = document.createElement("div");
    div2.textContent = "Just 5000Ft";
    let img = document.createElement("img");
    img.setAttribute("src", "/home/dev/Downloads/German-Goulash-4.jpg");
    


    goulashDiv.appendChild(img);
    goulashDiv.appendChild(div1);
    goulashDiv.appendChild(div2);


    let div3 = document.createElement("div");
    div3.textContent = "Tasty Hungarian Rántott Hús";
    let div4 = document.createElement("div");
    div4.textContent = "Just 4500Ft";
    let img2 = document.createElement("img");
    img2.setAttribute("src", "/home/dev/Downloads/Schnitzel-DE.jpg");
   

    schnitzelDiv.appendChild(img2);
    schnitzelDiv.appendChild(div3);
    schnitzelDiv.appendChild(div4);

    mainMenuDiv.appendChild(goulashDiv);
    mainMenuDiv.appendChild(schnitzelDiv);

    
    section.appendChild(mainMenuDiv);
    body.appendChild(section);
    footer.textContent="Hungarian Restaurant";
    body.appendChild(footer);
}

export { menuPage }