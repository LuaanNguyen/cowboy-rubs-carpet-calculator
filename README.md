# Cowboy Rob's Carpet Calculator 🤠
## Table of Contents
- Introduction
- Deliverable
- What is a Function?
- Provided Functions
- Testing Your Code
- Extra Help (If Needed)
- Level Up! (Extra Credit)

## Introduction
Welcome to *Cowboy Rob's Carpet Calculator*! Let's get started 🤠

Open your `script.js` file to see where you'll write your code. It looks like this:

```js
function calculateCarpet() {
  // 👇 Write your code here 👇
  
  // console.log("click");

}
```

Any code you write between these curly braces will run every time you click the `Calculate` button on the webpage.

Uncomment the `console.log("click")` statement by removing the preceding `//`. Once you've done that, click the repl's Run button. Now each time you click the `Calculate` button, you'll see the text "click" appear in the browser console.


## Deliverable
Your task is to retrieve the room dimensions a user enters and calculate the square footage of carpet needed to cover **both rooms INCLUDING 10% EXTRA.** Once you've calculated the square footage, you'll display that value on the page. 

We've included a few functions in the starter code to help you get the job done. Read on to learn more!

> **🗒 Note:** The only file you need to edit to complete this Milestone is `script.js`.

## What is a Function? 
Functions are pieces of Javascript code that accomplish a task and are assigned easy to remember names. 

One example of a function you've seen so far is `console.log()`, which prints some text to the console. We'll be doing a deep-dive on functions soon. For now, the important thing to know is **we can use (or "call") a function by writing its name followed by parentheses, often with some data between the parentheses.** 


## Provided Functions
You'll need to use each of the following functions to get get the job done.

> **🧠 Pro-tip:** Try running each of these functions from the console to fully understand them before you start coding. 

<hr>

1. **`getRoomWidth(roomNumber)`**
   
This function accepts a room number (either `1` or `2`) between its parentheses. The function will return the number a user typed into the width input for the room you specify (`1` for Room 1 or `2` for Room 2). On the page, type a number  in the width input for Room 1. Then, type `getRoomWidth(1)` in your console and press enter to see how it works. 
<hr>

2. **`getRoomLength(roomNumber)`**
   
This function works just like `getRoomWidth` but for the room's length. Type something into the length input for Room 1, then type `getRoomLength(1)` in your console and press enter to confirm how it works. 
<hr>

3. **`showResult(result)`**
   
This function accepts a number between its parentheses. You'll use this function to display the total square footage to the user once you've calculated it. Try running `showResult(255)` in the console and take a look at the page afterwards.

## Testing Your Code
Your starter code also includes a test function called **`calculateCarpetTest()`**. You can type this directly into the console yourself, or simply click the `Run` button as we've already called it at the bottom of your `script.js` file.

If your code is working, the test function will show a PASSED message in the console. If there are any issues with your code, the test will show a FAILED message and may produce a HINT to help you debug.

## Extra Help (If Needed)
You have everything you need to get started! The most challenging part is going to be decomposing this problem into smaller parts (what to do first, second, third). You should try this on your own but if you get stuck, take a look at `HINTS.md` for some extra help.


## Level Up! (Extra Credit)
Feel like taking things to the next level? Choose one (or both!) of the optional level ups below to snag some extra credit:

1. Head over to `provided.js`. Select two different provided functions and read over the code for each one. Leave comments at the bottom of  `script.js` that explain how these functions work in your own words. 
2. If you're feeling creative, write some custom CSS to add your own flare to the page. Leave a comment describing what you did in `script.js` so your grader can recognize your hard work! 

Good luck and happy coding. You got this!