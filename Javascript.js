// JavaScript Document
window.onload = function(){

   var blue = document.getElementById("blue");
       blue.addEventListener("click", function(event)
       {
           event.preventDefault();
           var getHTTP = new XMLHttpRequest();
           getHTTP.onreadystatechange = getHTML;
           getHTML.open("Get", "request.php?q=definition");
           getHTTP.send();
           
           function getHTML(){
               if(getHTTP.readyState === XMLHttpRequest.DONE){
                   
                   if (getHTTP.status === 200){
                       
                       alert(getHTTP.responseText);
                   }
               }
           }
       });
}