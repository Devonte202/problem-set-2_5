# Problem Set 2.5 - Array Fundamentals
## Short Response Section

**Directions:**
Write your responses to the questions below directly in this document. When you commit and push your changes, you will be able to see your rendered markdown on GitHub.

**1. What does it mean for arrays to be _passed by reference_ in JavaScript? Be sure to include a code snippet to illustrate your response.**

To be passed by reference means that when you return said array, it's location in memory is passed, rather than it's actual value. 
For example when you assign the array to a variable, you're assigning it's location in memory to that variable, not it's actual value. 

Ex.
Let array = [1,2,3,5,8];
Let newArray = array;

The example above shows a variable array being declared and initialized, then a new variable called newArray, 
is also declared but is initialized to be equal to the first variable. Now what this means is that that the data in the first 
array isn't copied into both arrays, instead they both reference the same set of data that lives in one place.


**2. What does it mean to _destructure_ a JavaScript array? How do we use the _spread operator_ for destructuring. Be sure to include a code snippet to illustrate your response.**
f

**3. What is the purpose of _rest parameters_? How do we use them? Use a code snippet to illustrate your response. Lastly, explain how do they differ from the `arguments` object?**

Rest parameters allow one to accept several instances of data into one function argument. 

Ex.
const newFunction = function(parameterOne, parameterTwo, ...restParameter){
  return  parameterOne - parameterTwo + restParameter;
}

newFunction (3, 2, 5, 7, 10);

The code above will return (3 - 2) + '5,7,10', because the rest parameter takes everything after the first two parameters and joins them together 
into one string, which in theory means you can have an indefinite amount of them. Meanwhile the `arguments` object which consists of the values passed 
when the function is invoked are limited to the amount of parameters the function can take.

