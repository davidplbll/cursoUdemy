//propiedades 
var p = {
  paginacion: document.querySelectorAll("#paginacion li"),
  item: 0,
  cajaSlide:document.querySelector("#slide ul")
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
  }
}

m.inicioslide();