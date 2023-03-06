
const NavBar = document.querySelector('#bars');
const NavLinks = document.querySelector('#navLinks')
const text = document.querySelector('#text')



const LoadEvenListerners = () => {
    NavBar.addEventListener('click', toogleNavs);
}





const toogleNavs = () => {
    NavLinks.classList.toggle('show')
    NavBar.classList.toggle('active')

}


LoadEvenListerners()

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'AMOS'
        text.style.fontSize = '4.5rem'
        
       
    }, 0);
    setTimeout(() => {
        text.textContent = 'DEVELOPER'
    }, 5000);
    setTimeout(() => {
        text.textContent = 'DESIGNER' 
    }, 10000);
}

textLoad()
setInterval(textLoad, 12000)
