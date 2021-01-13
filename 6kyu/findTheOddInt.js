function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    // filter returns an array of those where item== A[i]
    if((A.filter(item => {
      return item == A[i]; 
    })).length % 2 !== 0){
      return A[i];
    }
}
}
//findOdd([5,4,3,2,1,5,4,3,2,10,10])
// , 1)