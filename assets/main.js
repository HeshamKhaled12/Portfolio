
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroller-header');

}

window.addEventListener('scroll', scrollHeader);


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');

}

window.addEventListener('scroll', scrollUp);


const tabs = document.querySelectorAll('[data-target]'),
    tabContents= document.querySelectorAll('[data-content]');

tabs.forEach((tab) =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent)=> {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab)=>{
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');

    });

    
});

const contactForm = document.getElementById('contact-form'),
    contactName= document.getElementById('contact-name'),
    contactEmail= document.getElementById('contact-email'),
    contactSubject= document.getElementById('contact-subject'),
    contactMessage= document.getElementById('contact-message'),
    errorMessage= document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefualt();

        //checking if the field have a value 

        if(contactName.value === '' || 
        contactEmail.value === '' || 
        contactSubject.value === '' || 
        contactMessage.value === '')
        {
            //show the error message 
            errorMessage.textContent = 'Write all the input fields'
        }

        else{
            emailjs.sendForm('service_6dawmrn','template_0ny43mg','#contact-form','m4BypYqM05E5ArpWT').then(() => {
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message Sent ✅';

                setTimeout(()=> {
                    errorMessage.textContent ='';
                },5000);
            },(error) => {
                alert('OOPs SOMETHING WENT WRONG...',error);
            });

            contactName.value='';
            contactEmail.value='';
            contactMessage.value='';
            contactSubject.value='';
        };
    };

    contactForm.addEventListener('submit',sendEmail);