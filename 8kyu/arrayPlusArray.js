// array plus array 

// return to get result , then return within function again 
// concat to combine two arrays into one 
// reduce to sum up the numbers in array 
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce(function(acc,cur){
    return acc + cur 
    })
  }

// alt

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//arrayPlusArray([1, 2, 3], [4, 5, 6])
//21