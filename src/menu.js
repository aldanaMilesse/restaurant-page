import './style.css';
import ribImg from './ribeyes.png';
import costillaImg from './costillaimg.png';
import ribsBarbImg from './ribs.png';

const menuContent =  () => {
    //DOM
    const informationBox = document.querySelector('#information');
    const containerMenu = document.createElement('div');
    const ribEye = document.createElement('div');
    const costilla = document.createElement('div');
    const ribsBarbacoa = document.createElement('div');
    
    //rib eye img
    ribEye.textContent = 'RIB EYE';
    const ribEyesImage = new Image();
    ribEyesImage.src = ribImg;
    ribEye.classList.add('menuOptions');
    ribEyesImage.classList.add('menuIcon');

    // costilla
    costilla.textContent = 'COSTILLA';
    const costillaIcon = new Image();
    costillaIcon.src = costillaImg;
    costilla.classList.add('menuOptions');
    costillaIcon.classList.add('menuIcon');

    // ribs
    ribsBarbacoa.textContent = 'RIBS CON BARBACOA';
    const ribsBarbaIcon = new Image();
    ribsBarbaIcon.src = ribsBarbImg;
    ribsBarbacoa.classList.add('menuOptions');
    ribsBarbaIcon.classList.add('menuIcon')


    //class
    containerMenu.classList.add('contentMenuAndContact');

    //id
    containerMenu.id = 'menuInfo';

    //child
    ribEye.appendChild(ribEyesImage);
    ribsBarbacoa.appendChild(ribsBarbaIcon);
    costilla.appendChild(costillaIcon);

    containerMenu.appendChild(ribsBarbacoa);
    containerMenu.appendChild(ribEye);
    containerMenu.appendChild(costilla);
    informationBox.appendChild(containerMenu);
}; 

function removeMenu (){
    const containerMenu = document.querySelector('#menuinfo')
    containerMenu.remove();
}

function removeHome (){
    const homeConatiner = document.querySelector('#homeInfo');
    homeConatiner.remove();

}
export {menuContent, removeMenu, removeHome};