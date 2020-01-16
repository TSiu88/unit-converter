function convertGalToL(volume){
  return volume * 3.78541;
}

function convertLToGal(volume){
  return volume / 3.78541;
}

function convertFahrenheitToCelsius(temp){
  return (temp -32)* 5/9;
}

function convertCelsiusToFahrenheit(temp){
  return temp * (9/5) + 32;
}


$(document).ready(function(){

  var clickedId;
  $(".btn").click(function(){
    clickedId = $(this).attr("id");
  });

  $("#galAndL").submit(function(event){
    event.preventDefault();
    var volume = parseInt($("#galOrL").val());
    var result;
    
    if(clickedId === "galToL"){
      result = convertGalToL(volume);
    }
    if(clickedId === "lToGal"){
      result = convertLToGal(volume);
    }

    $("#output").text(result);
  });

  $("#cAndF").submit(function(event){
    event.preventDefault();
    var temp = parseInt($("#cOrF").val());
    var result;
    
    if(clickedId === "fToC"){
      result = convertFahrenheitToCelsius(temp);
    }
    if(clickedId === "cToF"){
      result = convertCelsiusToFahrenheit(temp);
    }

    $("#output").text(result);
  });

});