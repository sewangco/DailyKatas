function digitize(n) {
    let reverse = n.toString().split('').reverse()
    let array = []
    for(let i =0; i < reverse.length; i++){
      array.push(+reverse[i])
    }
   return array
  }

  digitize(35231)
  // [1,3,2,5,3]

  //alt
  function digitize(n) {
    return n.toString().split('').map(Number).reverse()
  
  }