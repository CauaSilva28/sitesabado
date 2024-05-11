const toggleTheme = document.getElementById('toggleTheme'); //pega a id toggleTheme no arquivo HTML
const rootHtml = document.documentElement; //pega todo o documento HTML
const accordionHeader = document.querySelectorAll('.accordion-header'); //Seleciona todas as classes(.) accordion-header
const menuLinks = document.querySelectorAll('.menu-link');

function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    currentTheme === 'dark' ? rootHtml.setAttribute('data-theme', 'light') : rootHtml.setAttribute('data-theme', 'dark'); //estrutura if e else simplificado, após ? e antes de : é o que executa se for true, depois de : é o que executa se for false

    toggleTheme.classList.toggle('bi-sun');
    toggleTheme.classList.toggle('bi-moon-stars');
}

toggleTheme.addEventListener('click', changeTheme);