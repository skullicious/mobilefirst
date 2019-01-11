 //Set up CORS proxy to get data
 var corsBypass = "https://cors.io/?";
 var rankTargetUrl =  'https://r6.tracker.network/profile/pc/earthpondjeff';
url = corsBypass + rankTargetUrl;
   
var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
     
     
       
        rank =([xhttp.responseXML.images[13].src]);   
               
      rankHtml = '<img src= "' + rank + '">';
      document.getElementById("rank").innerHTML = rankHtml;

           

        

       

     }
 };

xhttp.open("GET", url, true);
xhttp.responseType = "document";
xhttp.send();

 


 








