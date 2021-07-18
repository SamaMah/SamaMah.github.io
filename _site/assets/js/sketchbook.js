
var elemntsFromCollection =  document.getElementsByClassName("classnameHere");
var array = arrayOfElements = Array.from(elemntsFromCollection);
array.forEach(function(item) {
  var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
});
