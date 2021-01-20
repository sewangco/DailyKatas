function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
      //where their index is not the same as its first appearance but same as their last appearance
    }).length
  }
  
  //duplicateCount("abbCcde")
  //, 2