function init(){
// my javascrip code is below
 
	function myEventFunction(){
	  alert("Nilufer Anlar:" + ebutton.value);
	}
        
  var ebutton = document.getElementById('entrybutton');
  var einp = document.getElementById('entryinput');
		    
	ebutton.addEventListener('click', myEventFunction);
        
	eb.addEventListener('click', function(){
          
  console.log('I was Clicked!');
          
  var txtoutp = document.getElementById("textoutput");
  txtoutp.innerHTML = einp.value;

});
          
window.addEventListener('load', init);