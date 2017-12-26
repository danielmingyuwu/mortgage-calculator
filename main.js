function calculate(){
 var loan = parseInt(document.getElementById("loan").value);
 var rate = parseFloat(document.getElementById("rate").value);
 var years = parseInt(document.getElementById("years").value);

 // todo: actually implement the mortgage 
 var result = loan * rate * years;
 alert(result);
}
