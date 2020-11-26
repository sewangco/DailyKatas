function minSum(arr) {
    return arr.sort((a,b)=> {
      return a-b}).slice(0,arr.length/2).reduce((acc,curr,index)=> acc += curr* arr[arr.length - index -1],0)
   }
   // minSum([5,4,2,3])
   // exp : 22


   // alt 

function minSum(arr) {
  arr = arr.sort(function (a, b) {return a - b});
  
  let i = 0;
  let j = arr.length - 1;
  let sum = 0;
  while (i < j ) {
    sum += arr[i] * arr[j];
    console.log(arr[i])
    i++;
    j--;
  }
  return sum;
}
// because always smallest sum when biggest number and smallest are multiplied together first 
