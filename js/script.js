function lap(){
  var precio1 = document.getElementById("productos").value;
  document.getElementById("precio").innerHTML=precio1;
}
function AgregarProd(){
  var tb = document.getElementById("info");
  var productoss = document.getElementById("productos").value;
  var precio = document.getElementById("precio").innerHTML;
  var cantidad = document.getElementById("cantidad").value;
  var Total = (precio * cantidad);
  var fila="<tr><td id='nombre'>"+productoss+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+Total+"</td><td><a href='#' onclick='eliminar(this)'><img src='imagenes/d.png'></td></tr>";
  var fil = document.createElement("tr");
  fil.innerHTML=fila;
  tb.appendChild(fil);
  CalcSubTotal();
  CalcIGV();
  TOTAL();
  limpiar();
  mensaje("¡Registro guardado correctamente...!");
}
function CalcSubTotal(){
  var SubTotal = 0;
  var info = document.getElementById("info");
  for (var i = 1; i < info.rows.length; i++) {
      var st = parseFloat(info.rows[i].cells[3].innerText);
      SubTotal = SubTotal+st;
  }
    document.getElementById("SubTotal").innerText=SubTotal.toFixed(2);
}
function CalcIGV(){
  var cigv = 0;
  var info = document.getElementById("info");
  for (var i = 1; i < info.rows.length; i++) {
      var is = parseFloat(info.rows[i].cells[3].innerText);
      cigv=cigv+is;
  }
  tigv = cigv * 0.18;
    document.getElementById("IGV").innerText=tigv.toFixed(2);
}
function TOTAL(){
  var x = parseFloat(document.getElementById("SubTotal").innerHTML);
  var y = parseFloat(document.getElementById("IGV").innerHTML);
  var TOTAL = x+y;
  document.getElementById("Total").innerText=TOTAL.toFixed(2);
}
function mensaje(x){
  alert(x);
}

function eliminar(p){
    var opcion = confirm("¿Desea Eliminar...?");
    if (opcion == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("info").deleteRow(i);
        mensaje("Registro Eliminado correctamente...!");
    } else {
        mensaje("Registro no se eliminó...!");
    }
}
function limpiar(){
    document.getElementById("productos").value = "";
    document.getElementById("precio").innerHTML = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("nombre").focus();
}
