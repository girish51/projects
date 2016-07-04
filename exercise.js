var Worbtn=document.querySelector("#Worbtn");
var image1= document.querySelector("#image1");
var Motbtn = document.querySelector("#Motbtn");
var buttonresponse=document.querySelector("#buttonresponse");
	Motbtn.addEventListener("click", function (){
		if (buttonresponse.style.display== "block")
   			 {
        	buttonresponse.style.display = 'none';
   			 }
   		else 
   			 {
        	buttonresponse.style.display = 'block';
  			Worbtnresponse.style.display = 'none';
   			 }
	$('body').animate({
			scrollTop: $(buttonresponse).offset().top
		}, 2500);
});
	var Worbtnresponse= document.querySelector("#Worbtnresponse");
	Worbtn.addEventListener("click", function(){
		 buttonresponse.style.display = 'none';
		if (Worbtnresponse.style.display== "block")
    {

        Worbtnresponse.style.display = 'none';
    }
    else 
    {
        Worbtnresponse.style.display = 'block';
 	$('body').animate({
			scrollTop: $(Worbtn).offset().top
		}, 0);
		
		$('body').animate({
			scrollTop: $(Worbtnresponse).offset().top
		}, 2500);
        }
         
	});