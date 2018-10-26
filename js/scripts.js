var beepBoop = function(userInput){
  var results = [];
  for (var i=0; i <= userInput; i++) {
    var inputString = (i).toString();
    alert(inputString);
    if (inputString.includes("0")) {
      results.push("Beep! ")
    } else if (inputString.includes("1")) {
      results.push("Boop! ")
    } else if (inputString.includes([i] % 3 === 0)) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that. ")
    } else {
      results.push([i])
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
