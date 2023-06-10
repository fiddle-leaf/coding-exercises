/*
Challenge: addList

=======Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).

Examples:

addList(1) //=> 1
addList(1,50,1.23) //=> 52.23
addList(7,-12) //=> -5

*/

// Your solution for 01-addList here:

const addList = (num, ...nums) => {
    let sum = 0;
    sum += num;
      
    if (nums.length > 1){
      nums.forEach(x => {
        sum += x;
      })
    }
      return console.log(sum);
  }
  addList(1)
  addList(1,50,1.23)