function triangletracker() {
  var sideOne =parseInt(document.getElementById('a').value);
  var sideTwo =parseInt(document.getElementById('b').value);
    var sideThree =parseInt(document.getElementById('c').value);
//*!$(document).ready(function(\
var sides=[];
sides.push(sideOne,sideTwo,sideThree);
if (sides [0] ===sides[1] && sides[1] === sides[2] && sides [0]===sides [2])  {
  alert("traingle is equivalent");

    if(sideOne + sideTwo >sideThree && sideTwo + sideThree>sideOne && sideOne+sideThree>sideTwo) {
      if(sideOne===sideTwo && sideTwo===sideThree && sideOne===sideThree) {
        alert("This is an equilateral triangle");
    }
else if(sideOne===sideTwo || sideTwo===sideThree || sideOne===sideThree) {
  alert("This is an isosceles triangle");
}
else {
alert("This is a scalene triangle");
  }
}
else{
alert("This is not a triangle");
}
  }
