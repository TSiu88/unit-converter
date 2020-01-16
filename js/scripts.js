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

function convertGalToL(volume){
  return volume * 3.78541;
}

$(document).ready(function(){
  
  //var inputTemp = prompt("Temperature?");
  //var inputType = confirm("Temp in F?");

  //convertTemp(inputType, inputTemp);

  $("#galToL").submit(function(event){
    event.preventDefault();
    var volume = parseInt($("#gal").val());
    console.log(convertGalToL(volume));
    var result = convertGalToL(volume);

    $("#output").text(result);
  });

});