const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

/* Acordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Seta Topo
const rolagem = ()=> {
  const html = document.documentElement
  const seta = document.getElementById('go-top')

  /* Se a rolagem for maior que 550, a seta aparece 
  abaixo de 550 esconde */
  if (html.scrollTop > 550 ) {
    seta.style.display = 'block'
  } else {
    seta.style.display = 'none'
  }
}

//window.addEventListener('scroll', rolagem)
window.onscroll = ()=> rolagem()//evento somente para elem q existem no html