console.log('pog');

// ***Task A: Add comments to the code below.

// ***Task B: Complete the code so when the user clicks the update button, the DOM/HTML is
// updated. Use Pseudo Code

// *** Task C:  Create a class that when added to the body with javascript, turns the entire UI
// into a dark theme. This will occur when he #dark button is clicked. You will need both .js
// and css for this.

//linking the fucntion to the Id/ button update
var getUpdateButton = document.getElementById('update');
var getDarkButton = document.getElementById('dark');

getDarkButton.onclick = function() {
  console.log('dark working');
  var getFormGroup = document.querySelector('.form-inputs');

  getFormGroup.style.backgroundColor = 'blue';

  document.body.style.backgroundColor = 'grey';
};


//fucnction wraper, where infomation
getUpdateButton.onclick = function() {

  //aplying a value to id selectFontColor so it can be manipulated via a fucnction
  var getFontColor = document.getElementById('selectFontColor').value;
  var getBackgroundColor = document.getElementById('selectBackgroundColor').value;
  var getFontSize = document.getElementById('selectFontSize').value;

  var getDiv1 = document.querySelector('.holder');
  var headingOne = document.getElementById('headingNumberOne');



  console.log(getFontColor);
  console.dir(getBackgroundColor);
  console.log(getFontSize);
  console.log(getDiv1);


  headingOne.style.color = getFontColor;
  getDiv1.style.backgroundColor = getBackgroundColor;
  headingOne.style.fontSize = selectFontSize;






};
