var massages = document.getElementById("massages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var newmassage = document.createElement("li");
    newmassage.innerHTML = textbox.value;
    massages.appendChild(newmassage);
    textbox.value =""});
