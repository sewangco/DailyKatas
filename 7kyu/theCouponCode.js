function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
    if(enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
      return true
    } else return false
  }