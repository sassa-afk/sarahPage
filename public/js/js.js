document.addEventListener("DOMContentLoaded", function () {
    
    var slideIndex = 1;
    var slides = document.getElementsByClassName("mySlides");

    if (slides.length > 0) {
        slides[0].style.display = "block";  
    }

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        if (slides.length === 0) return;  
        
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

     setInterval(function () {
        plusDivs(1);
    }, 25000);

    window.plusDivs = plusDivs; 

});


document.addEventListener("DOMContentLoaded", function () {


  const elemento = document.querySelector(".p1");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        elemento.classList.add("ativo");
      }
    });
  }, { threshold: 0.5 }); 

  observer.observe(elemento);

});


document.addEventListener("DOMContentLoaded", function () {


  // const elemento = document.querySelector(".p1");

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       elemento.classList.add("ativo");
  //     }
  //   });
  // }, { threshold: 0.5 }); 

  // observer.observe(elemento);

// ===============================================

// const elementos2 = document.querySelectorAll(".balao");
  const elemento = document.querySelector(".TempoFormacao");

  const elemento1 = document.querySelector(".balao1");
  const elemento2 = document.querySelector(".balao2");
  const elemento3 = document.querySelector(".balao3");
  const elemento4 = document.querySelector(".balao4");
  const elemento5 = document.querySelector(".p1");

  const observer2 = new IntersectionObserver((entries) => {
  
    entries.forEach(entry => {
      if (entry.isIntersecting) {
                elemento.classList.add("ativo");

        elemento1.classList.add("ativo");
        elemento2.classList.add("ativo");
        elemento3.classList.add("ativo");
        elemento4.classList.add("ativo");
        // elemento5.classList.add("ativo");
       }
    });
  }, { threshold: 0.10 }); 

  observer2.observe(elemento);
  observer2.observe(elemento1);
  observer2.observe(elemento2);
  observer2.observe(elemento3);
  observer2.observe(elemento4);
  // observer2.observe(elemento5);

});

function menu_fixo(){ 
 
  // const estilo = window.getComputedStyle(menu);

  const hamburguer = document.querySelector(".hamburguer");
  const estiloHamburguer = window.getComputedStyle(hamburguer);


  const menu = document.querySelector(".barra_menu_fixo");
  const estilo = window.getComputedStyle(menu);

  const menu_fixo = document.querySelector(".menu_fixo");
  const estiloMenu_fixo = window.getComputedStyle(menu_fixo); 


  const btnMenu = document.querySelector(".btnMenu");
  const estiloBtnMenu = window.getComputedStyle(btnMenu);


 
  

  if(estilo.display === "none"){


    menu.style.display = "block"; 
    // menu.style.width = "100vw";

  }else{
    menu.style.display = "none"; 
  }


}




// document.addEventListener("DOMContentLoaded", function () {


//   const elemento7 = document.querySelector(".p2");

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         elemento7.classList.add("ativo");
//       }
//     });
//   }, { threshold: 0.5 }); 

//   observer.observe(elemento7);

// });

//    var slideIndex = 1;
//     showDivs(slideIndex);

//     function plusDivs(n) {
//         showDivs(slideIndex += n);
//     }

//     function showDivs(n) {
//         var i;
//         var x = document.getElementsByClassName("mySlides");
//         if (n > x.length) { slideIndex = 1; }
//         if (n < 1) { slideIndex = x.length; }
//         for (i = 0; i < x.length; i++) {
//             x[i].style.display = "none";
//         }
//         x[slideIndex - 1].style.display = "block";
//     }

//     document.addEventListener("DOMContentLoaded", function() {
//     document.getElementsByClassName("mySlides")[0].style.display = "block";
    
//     // Faz o slide trocar automaticamente a cada 14 segundos
//     setInterval(function() {
//         plusDivs(1);
//     }, 14000);
// });




