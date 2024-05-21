/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
;
        /*Menu show*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

        /*menu ridden*/
 if(navClose) {
     navClose.addEventListener('click', () =>{
     navMenu.classList.remove('show-menu')
    })
 };

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n =>n.addEventListener('click', linkAction))
/*=============== ADD BLUR HEADER ===============*/
/*=============== ADD BLUR HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header') 
                         : header.classList.remove('blur-header');
}

window.addEventListener('scroll', scrollHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID    templateID    FORM   PUBLUQUEKey
    emailjs.sendForm('service_phngu96','template_ksd33xe','#contact-form','hCs2zaisqosRkdian')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Mensage enviada com sucesso ✅'

        //remove message depois de 5 segundos
        setTimeout(()=>{
            contactMessage.textContent = 'menssage não enviada '
        },5000)

        //Clear input fields
        contactForm.reset()
    }, ()=>{
        //show error message
        contactMessage.textContent = 'message not sent ( service error) ❌   '
    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(`.van__menu a[href*="${sectionId}"]`);

        if (sectionsClass) { // Verifica se sectionsClass existe
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
  //  reset: true // Animations repeat
})

sr.reveal(`.home__data, .experience, .skills, .contact__container `)
sr.reveal(`.home__img`,{delay:600})
sr.reveal(`.home__scroll`,{delay:800})
sr.reveal(`.work__card .services__card`,{interval: 100})
sr.reveal(`.about__content`,{origin: 'right'})
sr.reveal(`.about__img`,{origin: 'right'})