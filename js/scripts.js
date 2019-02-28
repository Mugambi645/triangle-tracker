function triangletracker() {
  var sideOne = parseInt(document.getElementById('sidea').value);
  var sideTwo = parseInt(document.getElementById('sideb').value);
  var sideThree = parseInt(document.getElementById('sidec').value);

  if (sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne && sideOne + sideThree > sideTwo) {
    if (sideOne === sideTwo && sideTwo === sideThree && sideOne === sideThree) {
      alert("This is an equilateral triangle");
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      alert("This is an isosceles triangle");
    } else {
      alert("This is a scalene triangle");
    }
  } else {
    alert("This is not a triangle");
  }
}
