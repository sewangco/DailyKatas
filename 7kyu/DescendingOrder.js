function descendingOrder(n){
    return +n.toString().split('').sort((a,b) => {
      return b-a
    }).join('')
    
  }
//descendingOrder(123456789)
//987654321