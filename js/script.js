function init(){
// my javascrip code is below
  function myEventFunction(){
    var einp = document.getElementById("entryinput");
    alert("Nilufer Anlar: " + einp.value);
    var txtoutp = document.getElementById("textoutput");
    txtoutp.innerHTML = einp.value;
	}

  var ebutton = document.getElementById("entrybutton");
  // do the requested actions inside my function
	ebutton.addEventListener("click", myEventFunction);
}
          
window.addEventListener('load', init);