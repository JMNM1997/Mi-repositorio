
function start(e) {
  e.dataTransfer.effecAllowed = 'move'; 
  e.dataTransfer.setData("Text", e.target.id); 
  e.target.style.opacity = '0.4'; 
}


function end(e){
  e.target.style.opacity = '';           
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



