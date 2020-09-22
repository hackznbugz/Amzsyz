document.getElementById("nav").addEventListener("scroll", myFunction1);

function myFunction1() {

var elmnt = document.getElementById("nav");
var elmnt2 = document.getElementById("navb");

elmnt2.scrollLeft = elmnt.scrollLeft;

}

document.getElementById("navb").addEventListener("scroll", myFunction2);

function myFunction2() {

var elmnt = document.getElementById("navb");
var elmnt2 = document.getElementById("nav");

elmnt2.scrollLeft = elmnt.scrollLeft;

}

var navc = document.getElementsByClassName("navc");
var navbc = document.getElementsByClassName("navbc");
var icontent = document.getElementsByClassName("icontent");
navc[0].onclick = function() {
  doelse();
  navc[0].style.backgroundColor = "#8ca5f9";
  navbc[0].style.visibility = "visible";
  icontent[0].style.display = "block";
}
navc[1].onclick = function() {
  doelse();
  navc[1].style.backgroundColor = "#8ca5f9";
  navbc[1].style.visibility = "visible";
  icontent[1].style.display = "block";
}
navc[2].onclick = function() {
  doelse();
  navc[2].style.backgroundColor = "#8ca5f9";
  navbc[2].style.visibility = "visible";
  icontent[2].style.display = "block";
}
navc[3].onclick = function() {
  doelse();
  navc[3].style.backgroundColor = "#8ca5f9";
  navbc[3].style.visibility = "visible";
  icontent[3].style.display = "block";
}
navc[4].onclick = function() {
  doelse();
  navc[4].style.backgroundColor = "#8ca5f9";
  navbc[4].style.visibility = "visible";
  icontent[4].style.display = "block";
}
navc[5].onclick = function() {
  doelse();
  navc[5].style.backgroundColor = "#8ca5f9";
  navbc[5].style.visibility = "visible";
  icontent[5].style.display = "block";
}

function doelse(){
  for(i=0; i<navc.length; i++){
      navc[i].style.backgroundColor = "#b8c0ff";
  }
  for(i=0; i<navbc.length; i++){
      navbc[i].style.visibility = "hidden";
  }
  for(i=0; i<icontent.length; i++){
      icontent[i].style.display = "none";
  }
}
