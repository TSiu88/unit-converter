function convertFahrenheitToCelsius(temp){
  var result = parseInt(temp);
  alert((result -32)* 5/9);
}

function convertCelsiusToFahrenheit(temp){
  var result = parseInt(temp);
  alert(result * (9/5) + 32);
}

function convertTemp(input, temp){
  if(input){
  convertFahrenheitToCelsius(temp);
  }
  else{
  convertCelsiusToFahrenheit(temp);
  }
}

/* function convertCToF(){
    var result = parseInt(prompt("How hot in C?"));
    alert(result * (9/5) + 32);
  } 
  convertCToF(); */

function convertGalToL(volume){
  return volume * 3.78541;
}

$(document).ready(function(){
  
  //var inputTemp = prompt("Temperature?");
  //var inputType = confirm("Temp in F?");

  //convertTemp(inputType, inputTemp);

  $("#galToL").click(function(){
    var volume = parseInt(prompt("What is the volume in gallons that you would like to convert?"));
    console.log(convertGalToL(volume));
  });

});