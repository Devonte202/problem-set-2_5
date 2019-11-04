// Question 1
const shoutout = function(shoutoutArray) {
   for(let i = 0; i < shoutoutArray.length; i++){
     console.log(shoutoutArray[i]);
   }
};

// Question 2
const reverseArray = function(originalArray,) {
    let newArray = [];
    for(let i = originalArray.length - 1; i >= 0; i--){
     newArray.push(originalArray[i]);
   }
   return newArray;

};

// Question 3
const indexOf = function(array, value) {
  
   for(let i = 0; i < array.length ; i++){
       if(value === array[i]){
           return  i;
       }
   }
       return -1;
};

// Question 4
const join = function(array, seperator = ',') {
  let concatenatedString = '';
  let i;
  for(i = 0; i < array.length - 1; i++){
    
    concatenatedString =  concatenatedString + array[i] + seperator;
     
  }
  concatenatedString =  concatenatedString + array[i];
  return concatenatedString;

};

// Question 5
const push = function(array, value) {
    array.length = array.length + 1;
    array[array.length - 1] = value;
    return array.length;
};

// Question 6
const pop = function(array) {
   let poppedElement = array[array.length - 1];
   array.length = array.length - 1;
   return poppedElement;
};

// Question 7
const unshift = function(array, value) {    
    for(let i = array.length - 1; i >= 0; i--){
        array[i + 1] = array[i];
      }
      array[0] = value;
      return array.length;
};

// Question 8
const shift = function(array) {
   array.reverse();
   let poppedElement = array[array.length - 1];
   array.pop();
   array.reverse();
   return poppedElement;
};

// Question 9
const lastIndexOf = function(array, value) {
   for(let i = array.length - 1; i >= 0; i--){
  if(array[i] === value){
    return i;
  }
 }
   return -1;
};

// Question 10
const slice = function(array, start = 0, end = array.length) {
   let slicedArray = [];
   
   for( let i = start; i < end; i++){
       push(slicedArray, array[i]);
   }
   return slicedArray;
};

// Question 11
const splice = function(array, start = 0, deleteAmount) {
let limbo = [];
let deletedItems = [];


for(let i = array.length - 1; i >= start + deleteAmount; i--){
   limbo.push(array[i]);
}

for(let p = 0; p < start; p++){
    limbo.push(array[p]);
}

for(let a = start; a < deleteAmount; a++){
  deletedItems.push(array[a]);
}

limbo.reverse();
array.length = 0;

for(let j = 0; j < limbo.length; j++){
 array.push(limbo[j]);
}
return deletedItems;
};

// Question 12
const spliceForReal = function(array, start = 0, deleteAmount, ...dataInsert) {
let limboStart = [];
let limboEnd = [];
let deletedItems = [];
let dataArray = [];

for(let m = 0; m < dataInsert.length; m++){
    dataArray.push(dataInsert);
}

 for(let i = array.length - 1; i >= start + deleteAmount; i--){
       limboEnd.push(array[i]);
   }

for(let p = 0; p < start; p++){
    limboStart.push(array[p]);
}

for(let a = start; a < deleteAmount + 1; a++){
  deletedItems.push(array[a]);
  
}

limboStart.reverse();
limboEnd.reverse();
array.length = 0;

   for(let j = 0; j < limboStart.length; j++){
     
     array.push(limboStart[j]);
     
     
   }

   for(let d = 0; d < dataInsert.length; d++){
     
     array.push(dataInsert[d]);
     
   }

   for(let x = 0; x < limboEnd.length; x++){
     
     array.push(limboEnd[x]);
     
   }
   
return deletedItems;
};

// Question 13
const concat = function() {

};

// Question 14
const shallowCompare = function(arrayOne, arrayTwo) {
   for(let i = 0; i < arrayOne.length; i++){
       
           if(arrayOne[i] !== arrayTwo[i]){
               return false;
           }
   }
     return true;
};

// Question 15
const deepCompare = function(arrayOne, arrayTwo) {
    if(arrayOne.length !== arrayTwo.length) return false
    
    for(let i = 0; i < arrayOne.length; i++){
        if(Array.isArray(arrayOne[i])){
            if (!shallowCompare(arrayOne[i], arrayTwo[i])) return false;
        }else {
            if (arrayOne[i] !== arrayTwo[i]) return false;
        }
    }
    return true;
};


// Write all your code ABOVE this line
module.exports = {
  reverseArray,
  indexOf,
  join,
  push,
  pop,
  unshift,
  shift,
  lastIndexOf,
  slice,
  splice,
  spliceForReal,
  concat,
  shallowCompare,
  deepCompare,
};
