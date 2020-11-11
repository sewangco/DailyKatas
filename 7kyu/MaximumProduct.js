
// function adjacentElementsProduct(array) {
//   let max= 0;
//  for(let i=0; i <array.length; i++){
//    if(array[i]*array[i+1] > max){
//      max = array[i]*array[i+1]
//    }
//  }
//   return max
// }

function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
      newArr.push(array[i]*array[i+1])
    }  
    return Math.max(...newArr)
  }
  
  //adjacentElementsProduct([1, 2, 3])
  // exp: 6