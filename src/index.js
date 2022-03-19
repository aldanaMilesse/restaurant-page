import { functionOne , homeContent} from "./initiaPageLoad";
import { menuContent, removeMenu, removeHome } from './menu.js'; 
import { contact, removeContact } from './contact.js';


functionOne();
homeContent();

let isHome = true;
let isMenu = false;
let isContact = false;

const contentBtn = document.querySelectorAll('button');
contentBtn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if (e.target.value == 'menu'){
            if(isHome){
                removeHome();
                isMenu = true;
                menuContent();
                isHome = false;
            }
            if(isContact){
                removeContact();
                isMenu= true;
                menuContent();
                isContact= false
            }

        }
        if (e.target.value == 'home'){
            if(isMenu){
                removeMenu();
                isHome = true;
                homeContent();
                isMenu= false;  
            }
            if(isContact){
                removeContact();
                isHome = true;
                homeContent();
                isContact = false;
            }
        }
        if (e.target.value == 'contact'){
            if(isMenu){
                removeMenu();
                isContact = true;
                contact();
                isMenu = false;
            }
            if (isHome){
                removeHome();
                isContact = true;
                contact();
                isHome = true;
            }
        }
    })
});