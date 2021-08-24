import {homePage,mainHomePage} from "./home"
import {menuPage} from "./menu"
import {contactPage} from "./contact"
homePage();

const homeBtn=document.getElementById("navDiv1");
const menuBtn=document.getElementById("navDiv2");
const contactBtn=document.getElementById("navDiv3");

homeBtn.addEventListener('click',mainHomePage);
console.log("hello");
menuBtn.addEventListener('click',menuPage);
contactBtn.addEventListener('click',contactPage);

