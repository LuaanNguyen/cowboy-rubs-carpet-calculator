/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
  console.log("click");

  //get the measurements a user entered
  //get the width of Room 1  with getRoomWidth and store it in a variable 
  let roomWidth1 = getRoomWidth(1); 
  //Get the length of Room 1 with getRoomLength and store it in a variable 
  let roomLength1 = getRoomLength(1);
  
  //get the width of Room 2 with getRoomWidth and store it in a variable 
  let roomWidth2 = getRoomWidth(2);
  //Get the length of Room 2  with getRoomLength and store it in a variable 
  let roomLength2 = getRoomLength(2);

  
  //Multiply Room1Length by Room1Width and store it in a variable ( 1 * 2) 
  //Multiply Room2length by Room2Width and store it in a variable 
  // Add both sqfts together and store it in a variable
  // To increase the sqfts by 10%, you can multiply it by 1.1 
  let requiredSqft = 1.1*((roomWidth1 * roomLength1) + (roomWidth2 * roomLength2));
  
  //Display the resut to the user with showResult (result)
  showResult(requiredSqft);

}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations: 
  function validateResult() checks whether the there's a blank space within the parameter ("Undefined") and return false if there is. The function returns true otherwise.

  function showResult() takes the calculated required square foot as parameter and put them in the function validateResult, which has 2 parameters to check if it is undefined or not. Then, it will convert the variable "result" into floating-point number and format it to 2 decimal places. 
  I'm not entirely sure that "_TESTING" does but it seems to assign the testing value to the result and return it to the user. 
  Finally, "document.getElementById("result").innerText = result;" updates the inner text of an element, presumably through HTML to display the formatted output.
  
	2. Custom styles added: 
 I changed the font size in #result to be responsive 
 font-size: 5vw;


*/