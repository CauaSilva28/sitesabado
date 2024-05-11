const toggleTheme = document.getElementById('toggleTheme'); //pega a id toggleTheme no arquivo HTML
const rootHtml = document.documentElement; //pega todo o documento HTML
const accordionHeaders = document.querySelectorAll('.accordion-header'); //Seleciona todas as classes(.) accordion-header
const menuLinks = document.querySelectorAll('.menu-link');

//Função mudar tema do site
function changeTheme(){
    const currentTheme = rootHtml.getAttribute('data-theme');

    currentTheme === 'dark' ? rootHtml.setAttribute('data-theme', 'light') : rootHtml.setAttribute('data-theme', 'dark'); //estrutura if e else simplificado, após ? e antes de : é o que executa se for true, depois de : é o que executa se for false

    toggleTheme.classList.toggle('bi-sun');
    toggleTheme.classList.toggle('bi-moon-stars');
}

toggleTheme.addEventListener('click', changeTheme); //Evento de click (ao clicar no icone do tema)

//Função abrir e fechar objetos selecionados
accordionHeaders.forEach(header =>{ // => é mesma coisa que function() / forEach pega todos os elementos da const accordionHeader
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains('active');

        accordionActive ? accordionItem.classList.remove('active') : accordionItem.classList.add('active');
    });
});

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        menuLinks.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});