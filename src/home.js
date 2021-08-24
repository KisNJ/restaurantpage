
function homePage(){
    let body=document.querySelector("body");
    //Header
    let header=document.createElement("header");
    let titleDiv=document.createElement("div");
    titleDiv.id="title";
    titleDiv.textContent="Goulash Restaurant";
    header.appendChild(titleDiv);

    let Nav=document.createElement("div");
    Nav.id="Nav";
    header.appendChild(Nav);

    let NavDiv1=document.createElement("div");
    let NavDiv2=document.createElement("div");
    let NavDiv3=document.createElement("div");
    
    NavDiv1.textContent="Home";
    NavDiv2.textContent="Menu";
    NavDiv3.textContent="Contact";

    NavDiv1.className="li";
    NavDiv1.id="navDiv1";
    NavDiv2.className="li";
    NavDiv2.id="navDiv2";
    NavDiv3.className="li";
    NavDiv3.id="navDiv3";

    Nav.appendChild(NavDiv1);
    Nav.appendChild(NavDiv2);
    Nav.appendChild(NavDiv3);
    
    //Section
    let section=document.createElement("section");
    

    let titleInSectionDiv=document.createElement("div");
    let b=document.createElement("b");
    b.textContent="Family owned since 1998";
    titleInSectionDiv.appendChild(b);
    titleInSectionDiv.id="titleInSection";
    section.appendChild(titleInSectionDiv);

    let sectionGridDiv=document.createElement("div");
    sectionGridDiv.id="sectionGrid";
    

    let img=document.createElement("img");
    img.setAttribute("src","/home/dev/Pictures/Screenshot_20210823_142211.png");
    img.id="location";
    sectionGridDiv.appendChild(img);

    let introductionDiv=document.createElement("div");
    introductionDiv.id="introduction";
    introductionDiv.textContent="Our restaurant located in Tiszafüred serves delicious Hungarian food.";


    let p4=document.createElement("p");
    p4.textContent="Come enjoy your meal with us.";
    
    

    let p2=document.createElement("p");
    let b2=document.createElement("b");
    b2.textContent="Location:";
    p2.appendChild(b2);
    p2.innerHTML+="5358 Tiszafüred";


    let p3=document.createElement("p");
    let b3=document.createElement("b");
    b3.textContent="Open:";
    p3.appendChild(b3);
    
    p3.innerHTML+="M-F:8-19 S-S:8-22";
    
    
    introductionDiv.appendChild(p2);
    introductionDiv.appendChild(p3);
    introductionDiv.appendChild(p4);
    sectionGridDiv.appendChild(introductionDiv);
    section.appendChild(sectionGridDiv);

let footer=document.createElement("footer");
footer.textContent="Hungarian Restaurant";


body.appendChild(header);
body.appendChild(section);
body.appendChild(footer);


}
function mainHomePage(){
    let section=document.querySelector("section");
   
    
    while (section.firstChild) {
    section.removeChild(section.lastChild)
    }
    let footer2=document.querySelector("footer");
    while (footer2.firstChild) {
        footer2.removeChild(footer2.lastChild)
    }
    

    let titleInSectionDiv=document.createElement("div");
    let b=document.createElement("b");
    b.textContent="Family owned since 1998";
    titleInSectionDiv.appendChild(b);
    titleInSectionDiv.id="titleInSection";
    section.appendChild(titleInSectionDiv);

    let sectionGridDiv=document.createElement("div");
    sectionGridDiv.id="sectionGrid";
    

    let img=document.createElement("img");
    img.setAttribute("src","/home/dev/Pictures/Screenshot_20210823_142211.png");
    img.id="location";
    sectionGridDiv.appendChild(img);

    let introductionDiv=document.createElement("div");
    introductionDiv.id="introduction";
    introductionDiv.textContent="Our restaurant located in Tiszafüred serves delicious Hungarian food.";


    let p4=document.createElement("p");
    p4.textContent="Come enjoy your meal with us.";
    
    

    let p2=document.createElement("p");
    let b2=document.createElement("b");
    b2.textContent="Location:";
    p2.appendChild(b2);
    p2.innerHTML+="5358 Tiszafüred";


    let p3=document.createElement("p");
    let b3=document.createElement("b");
    b3.textContent="Open:";
    p3.appendChild(b3);
    
    p3.innerHTML+="M-F:8-19 S-S:8-22";
    
    
    introductionDiv.appendChild(p2);
    introductionDiv.appendChild(p3);
    introductionDiv.appendChild(p4);
    sectionGridDiv.appendChild(introductionDiv);
    section.appendChild(sectionGridDiv);

    

    footer2.textContent="Hungarian Restaurant";
    
}

export  {homePage,mainHomePage};