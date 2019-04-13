function init(){
// my javascrip code is below

  var einp = document.getElementById("entryinput");
  var ebutton = document.getElementById("entrybutton");
  var txtoutp = document.getElementById("textoutput");
	      
	ebutton.addEventListener("click", function(){
    alert("Nilufer Anlar:" + einp.value);
    console.log("I was Clicked!");
    txtoutp.innerHTML = einp.value;
  });
}
          
window.addEventListener('load', init);