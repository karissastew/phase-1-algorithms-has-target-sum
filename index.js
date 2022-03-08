function hasTargetSum(array, target) {
  const seenNumbers = {};
  
  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}
function findSock(array) {
  for (const item of array) {
    if (item === "sock") return "sock";
  }
}

function findSock(object) {
  if (object.sock) return "sock";
}
/* 
  Add your pseudocode here
*/

/*
    hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }
  create an object to keep track of numbers we've already seen
  iterate through each number in the array
    for the current num, identify a complement that adds to the target (comp = target - num)
    check if any key on our object is the complement
      if so, return true
      otherwise, add that number to the object
  if I reach the end of the array, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
