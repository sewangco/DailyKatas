function firstNonConsecutive (arr) {
    for(let i=0; i < arr.length-1;i++){
      if(arr[i+1]-arr[i]!==1){
        return arr[i+1]
      } 
      } 
      return null
      // had to be outside the for loop or else it would count the consecutive number first and default to null
    }
    
    
    //firstNonConsecutive([1,2,3,4,6,7,8])
     // 6