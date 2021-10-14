
function hasTargetSum(array, target) {
  // take out some of the elements if they are > the target
  // no this doesn't change our big O
  // a1 = [3, 4, 11, 12, 5, 7], target = 10
  // sort and filter out ... going over the array 2x
  // a2 = [3, 4, 5, 7] length = 2/3 length of a2
  for (let beg=0; beg<array.length; beg++) {
    for (let end=beg+1; end<array.length; end++){
      if (array[beg] + array[end] === target) {
          return true;
        }
    }
  }
  return false;
}

array = [3, 4, 11, 12, 5];
target = 10;
console.log(hasTargetSum(array,target));

let n = array.length;

/* 
  Write the Big O time complexity of your function here

  - 

*/

/*
  Add written explanation of your solution here
  -  make a pointer to the first element
  -  make a second pointer that will move over the other elements
  -  add the two, and check if it is the target
  -  if none for that round, then move first pointer to second element (repeat process)

  -  sort the array (least to most)
  -  ignore anything that is greater than our target
  -  apply the above solution

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
