function modifiedSum(a, n) {
    let sumOfPower=0
    let sumOfNum=0
    for(let i=0; i < a.length;i++){
      sumOfPower += a[i]**n
      sumOfNum += a[i]
    }
    return sumOfPower - sumOfNum
  }
  //modifiedSum([1, 2, 3], 3)
  // 30