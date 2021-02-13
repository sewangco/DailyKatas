function elevatorDistance(array) {
    
    let distance = 0
    for (let i=0; i < array.length -1; i++){
      distance += Math.abs(array[i]- array[i+1])
    }
    return distance
    
  }

  //alt
  return array.slice(1).reduce((s,num,i) => s + Math.abs(num - array[i]),0)
  
  //elevatorDistance([5,2,8])
  //, 9