
const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', (event) =>{
    document.querySelector('.sidebar').classList.toggle('active');
});