function contact (){
    const informationBox = document.querySelector('#information');
    const containerContact = document.createElement('div');
    const email = document.createElement('div');
    const phone = document.createElement('div');
    const address = document.createElement('div');

    const addressInfo = document.createElement('p');
    const phoneInfo = document.createElement('p');
    const emailInfo = document.createElement('p');

    //address
    address.textContent = '🏠 ADDRESS';
    addressInfo.textContent = 'Guatemala 4691 (esquina Gurruchaga) Palermo Viejo, C.A.B.A. Argentina'

    // number
    phone.textContent = '📞 PHONE';
    phoneInfo.textContent = "(5411) 4831-9564";

    //email
    email.textContent = 'EMAIL';
    emailInfo.textContent = 'info@parrilladonjulio.com.ar';

    //class
    containerContact.classList.add('contentMenuAndContact');
    containerContact.id = 'contactInfo';

    address.appendChild(addressInfo);
    phone.appendChild(phoneInfo);
    email.appendChild(emailInfo);

    
    containerContact.appendChild(address);
    containerContact.appendChild(email);
    containerContact.appendChild(phone);
    informationBox.appendChild(containerContact);
}

function removeContact (){
    const contactBox = document.querySelector('#contactInfo');
    contactBox.remove();

}

export { contact, removeContact };