/* Códigos abaixo em ordem:

- Abrir e fechar o menu ao clicar (código 1)
- Sombrear o cabeçalho da página ao rolar (código 2)
- O Swiper usado na seção de depoimentos (código 3)
- O scroll reveal da página (código 4)
- O botão de voltar pra cima (código 5)
- Marcar a seção visível do menu (código 6)

*/





/* Código para abrir e fechar o menu ao clicar */
/* Código 1 * /

/* querySelector é uma função do objeto "Documento" */

const nav = document.querySelector('#Header nav')
/* A variável NAV recebe UM elemento dentro do caminho #Header -> nav */

const troca = document.querySelectorAll('nav .toggle')
/* A variável TROCA recebe 2 elementos no caminho nav -> .toggle */

const links = document.querySelectorAll('nav ul li a')


/* "Para cada elemento de troca */
for (const element of troca) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
    
    /* Esse toggle é palavra reservada */
    /* Ele significa: tirar ou colocar */
    /* Aqui ficou tipo: tire ou coloque a classe show */
  })
}

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}





/* Sombrear no cabeçalho ao rolar a página */
/* Código 2 */

const header = document.querySelector("#Header")
const navH = header.offsetHeight

function ChangeHeaderWhenScroll() {
  /* Para guardar o deslocamento da altura */
  
  /* "Quando interagirem com a janela" */

  if (window.scrollY >= navH) 
    {
      header.classList.add('scroll')
    } 
    else 
    {
      header.classList.remove('scroll')
    }
}





/* O slide de Swiper da aba depoimentos */
/* Código 3 */

const swiper = new Swiper('.swiper', {

  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})






/* O scroll reveal da página */
/* Código 4 */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
 `
 #home .imagem, #home .text,
 #about .imagem, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials,
 #contact .text, #contact .links,
 footer .brand, footer .social
 `,
 { interval: 100 })





/* O botão de voltar pra cima */
/* Código 5 */

function backToTop() {
  const backToTop = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTop.classList.add('show')
  }
  else 
  {
    backToTop.classList.remove('show')
  }
}









/* Marcar a seção visível no menu */
/* Código 6 */

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}



window.addEventListener('scroll', function() {
  ChangeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})



/* Definir um elemento: .querySelector (e adicione o caminho) */
/* Para mais de um elemento: .querySelectorAll */
