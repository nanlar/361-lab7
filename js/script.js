function init(){
// my javascript code below uses my function to do two actions
  function myEventFunction(){
    var einp = document.getElementById("entryinput");
    alert("Nilufer Anlar: " + einp.value);

    var txtoutp = document.getElementById("textoutput");
    txtoutp.innerHTML = einp.value;
	}

  var ebutton = document.getElementById("entrybutton");
	ebutton.addEventListener("click", myEventFunction);
}
          
window.addEventListener('load', init);