function homePage(){
    let body=document.querySelector("body");
    //Header
    let header=document.createElement("header");
    let titleDiv=document.createElement("div");
    titleDiv.id="tile";
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

    for (let i = 1; index <= 3; index++) {
        `NavDiv${i}`.classList.add("li");
        Nav.appendChild(`NavDiv${i}`);
    }
    //Section
    let section=document.createElement("section");
    let titleInSectionDiv=document.createElement("div");
    let b=document.createElement("b");
    b.textContent="Family owned since 1998";
    titleInSectionDiv.appendChild(b);
    section.appendChild(titleInSectionDiv);

    let sectionGridDiv=document.createElement("div");
    sectionGridDiv.id="sectionGrid";
    

    let img=document.createElement("img");
    img.setAttribute("src","/home/dev/Pictures/Screenshot_20210823_142211.png");
    img.id="location";
    sectionGridDiv.appendChild(img);

    let introductionDiv=document.createElement("div");






    section.appendChild(sectionGridDiv);
    /*<section>

    <div id="sectionGrid">
        
        <div id="introduction">
            Our restaurant located in Tiszafüred serves delicious Hungarian food.
            <p>Come enjoy your meal with us.</p>
            <p><b>Location:</b> 5358 Tiszafüred</p>
            <p><b>Open:</b> M-F:8-19 S-S:8-22</p>
            <p>Come enjoy your meal with us.</p>
        </div>
    </div>
</section>
*/
//footer
let footer=document.createElement("footer");
footer.textContent="Hungarian Restaurant";


body.appendChild(header);
body.appendChild(section);
body.appendChild(footer);


}
export {homePage};