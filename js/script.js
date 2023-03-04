
const NavBar = document.querySelector('#bars');
const NavLinks = document.querySelector('#navLinks')



const LoadEvenListerners = () => {
    NavBar.addEventListener('click', toogleNavs);
}





const toogleNavs = () => {
    NavLinks.classList.toggle('show')
    NavBar.classList.toggle('active')

}


LoadEvenListerners()