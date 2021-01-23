function validatePIN (pin) {
    let isCorrectPinLength= (pin.length === 4 || pin.length === 6)
    if (!isCorrectPinLength){
      return false
    }
    for(let i in pin){
      if (pin[i] >9 || pin[i] < 0 || typeof pin[i] !== 'number'){
        return false
      } else {
        return true
      }
    }
  }
  validatePIN("a12345")


  /// not done , need to use regex