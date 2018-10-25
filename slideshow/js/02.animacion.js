//propiedades 
var p = {
  paginacion: document.querySelectorAll("#paginacion li"),
  item: 0,
  cajaSlide:document.querySelector("#slide ul"),
  animacionslide:"fate",
  imgSlide:document.querySelectorAll("#slide ul li")
}
//metodos

var m = {
  inicioslide: function () {
    for (var i = 0; i < p.paginacion.length; i++) {
      p.paginacion[i].addEventListener("click", m.paginacionSlide)
    }
  },
  paginacionSlide: function (item) {
    p.item = item.target.parentNode.getAttribute("item")-1;
    m.movimientoSlide(p.item);
  },
  movimientoSlide(item){
    p.cajaSlide.style.left = String(item*-100)+"%"
    p.paginacion.forEach(function(element){
      element.style.opacity=.5;
    });
    p.paginacion[item].style.opacity=1;
    if(p.animacionslide=="slide"){
      p.cajaSlide.style.transition=".7s left ease-in-out";
    }else if(p.animacionslide=="fate"){
      p.imgSlide[item].style.opacity=0;
      p.imgSlide[item].style.transition=".10s opacity ease-io-out";
      setTimeout(() => {
        p.imgSlide[item].style.opacity=1;
      }, 200);
    }
  }
}

m.inicioslide();