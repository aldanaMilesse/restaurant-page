import './style.css';
import Icon from './Don-julio.jpg';

const functionOne = () => {
    // create element
    const content = document.querySelector('#content')
    const titleInitial = document.createElement('h1');
    const contentBtn = document.createElement('div');
    const footerRestaurant = document.createElement('footer');
    const footerTxt = document.createElement('a');
    const infoRestaurant = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    // text 
    titleInitial.textContent = 'DON JULIO GRILL';
    home.textContent = 'HOME';
    menu.textContent ='MENU'; 
    contact.textContent ='CONTACT';
    footerTxt.textContent = 'developed by Aldana Milesse';

    //  href 
    footerTxt.href = 'https://github.com/aldanaMilesse';

    //value
    home.value = 'home';
    menu.value = 'menu';
    contact.value = 'contact';
    // id
    contentBtn.setAttribute('id', 'arrayBtn');
    infoRestaurant.setAttribute("id", "information");

    // add class
    titleInitial.classList.add('content');
    //infoRestaurant.classList.add('initialInformation');
    footerRestaurant.classList.add('content');
    

    // append child 
    content.appendChild(titleInitial);
    content.appendChild(contentBtn);
    content.appendChild(infoRestaurant);
   
    content.appendChild(footerRestaurant);
    contentBtn.appendChild(home);
    contentBtn.appendChild(menu);
    contentBtn.appendChild(contact);
    footerRestaurant.appendChild(footerTxt);
};

const homeContent = () => {
    const informationBox = document.querySelector('#information');
    const pagHome = document.createElement('div');
    const sincetxt = document.createElement('p');
    const myIcon = new Image();

    pagHome.textContent = 'Don Julio Grill is the only Argentinean restaurant in The Worlds 50 Best Restaurants 2021';
    sincetxt.textContent = 'Made with passion since 1999';

    myIcon.src = Icon;

    myIcon.classList.add('donJulioImage');
    pagHome.classList.add('content')
    pagHome.id = 'homeInfo';


    pagHome.appendChild(myIcon);
    pagHome.appendChild(sincetxt);
    informationBox.appendChild(pagHome);
};

export { functionOne , homeContent};