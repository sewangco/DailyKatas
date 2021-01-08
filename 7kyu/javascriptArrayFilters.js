function getEvenNumbers(numbersArray){
    return numbersArray.filter((num)=> {
      return num%2 === 0
    })
  }
  //getEvenNumbers([2,4,5,6]) 
  // should == [2,4,6]