function isDivideBy(number, a, b) {
    if (number%a === 0 && number%b === 0){
    return true
    } else return false
  }


//isDivideBy(-12, 2, -5)
// expect: true

// alt

function isDivideBy(number, a, b) {
    return number%a === 0 && number%b === 0 ? 
    true: false
  }