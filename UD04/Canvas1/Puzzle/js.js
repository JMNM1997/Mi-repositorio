
function start(e) {
  e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
  e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
  e.target.style.opacity = '0.4'; 
}


function end(e){
  e.target.style.opacity = ''; // Restaura la opacidad del elemento           
  e.dataTransfer.clearData("Data");           
}


function enter(e) {
  return true;
}


function over(e) {
  if ((e.target.className == "pieza") || (e.target.id == "contenedorPiezas"))
      return false;
  else
  return true;
}
  

function drop(e){
  e.preventDefault(); 
  var elementoArrastrado = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(elementoArrastrado));

}



