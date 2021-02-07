function sumTwoSmallestNumbers(numbers) {  
    let array = numbers.sort((a,b)=> {
      return a - b
    }).slice(0,2)
    let sum =0
    array.forEach(char => sum += char)
    return sum
  }

  //sumTwoSmallestNumbers([5, 8, 12, 19, 22])
  //, 13 , "Sum should be 13"