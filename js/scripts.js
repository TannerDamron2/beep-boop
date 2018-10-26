var beepBoop = function(userInput){
  var results = [];
  for (var i=0; i <= userInput; i++) {
    var inputString = (i).toString();
    alert(inputString);
    if (inputString.includes("0")) {
      results.push("Beep! ")
    } else {
      alert(false);
    }
  }
  return results
  alert(results);
}

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#inputNumber").val());
    var output = beepBoop(userInput);
    var stringOutput = output.join("");
    $("#result").show();
    $("#result").text(stringOutput);
  });
});
