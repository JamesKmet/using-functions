// All custom js here
console.log('working....');
// This is global
// iife immediately invoked functional expression
(function() {
  var cloudObject = {};
  // Vars at the top of your code
  var getDiv = document.querySelector('.holder');
  var getBtnA = document.querySelector('#addClassAnimation');
  var getBtnB = document.querySelector('#removeClassAnimation');
  // Setup click events
  getBtnA.onclick = function () {
    // calling the functions
    startAnimation();
  };
  getBtnB.onclick = function () {
    // calling the functions
    endAnimation();
  };
  function startAnimation () {
    console.log('working vanilla js....');
    // Adding a class with vanilla .js
    getDiv.classList.add('animation');
  }
  function endAnimation () {
    console.log('working vanilla js....');
    // Removing a class with vanilla .js
    getDiv.classList.remove('animation');
  }
}());
// iife ENDS
