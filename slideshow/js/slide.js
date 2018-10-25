//propiedades 
var p = {
  paginacion: document.querySelectorAll("#paginacion li"),
  item: 0,
  cajaSlide: document.querySelector("#slide ul"),
  animacionslide: "slide",
  imgSlide: document.querySelectorAll("#slide ul li"),
  avanzar: document.querySelector("#slide #avanzar"),
  retroceder: document.querySelector("#slide #retroceder"),
  velocidad: 3000,
  formatearLoop: false
}
//metodos

var m = {
  inicioslide: function () {
    for (var i = 0; i < p.paginacion.length; i++) {
      p.paginacion[i].addEventListener("click", m.paginacionSlide)
      p.imgSlide[i].style.width=(100/p.paginacion.length)+"%"
    }
    p.avanzar.addEventListener("click", m.avanzar)
    p.retroceder.addEventListener("click", m.retroceder)
    m.interval()
    p.cajaSlide.style.width=(p.paginacion.length*100)+"%"
  },
  paginacionSlide: function (item) {
    p.item = item.target.parentNode.getAttribute("item") - 1;
    m.movimientoSlide(p.item);
  },
  avanzar: function () {
    if (p.item == p.imgSlide.length - 1) {
      p.item = 0
    } else {
      p.item++;
    }
    m.movimientoSlide(p.item);
  },
  retroceder: function () {
    if (p.item == 0) {
      p.item = p.imgSlide.length - 1
    } else {
      p.item--;
    }
    m.movimientoSlide(p.item);

  },
  movimientoSlide(item) {
    p.formatearLoop = true;
    p.cajaSlide.style.left = String(item * -100) + "%"
    p.paginacion.forEach(function (element) {
      element.style.opacity = .5;
    });
    p.paginacion[item].style.opacity = 1;
    if (p.animacionslide == "slide") {
      p.cajaSlide.style.transition = ".7s left ease-in-out";
    } else if (p.animacionslide == "fate") {
      p.imgSlide[item].style.opacity = 0;
      p.imgSlide[item].style.transition = ".10s opacity ease-io-out";
      setTimeout(() => {
        p.imgSlide[item].style.opacity = 1;
      }, 200);
    }
  },
  interval: function () {
    setInterval(function () {
      if (p.formatearLoop) {
        p.formatearLoop = false;
      } else {
        m.avanzar();
      }
    }, p.velocidad);
  }
}

m.inicioslide();