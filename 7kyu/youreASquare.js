var isSquare = function(n){
    if(Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n)) === n){
      return true
    }else {
      return false
    }
  }

  //alt

  var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }

  //alt 
  var isSquare = (n)=> {
      return Math.sqrt(n)%1 === 0
  }