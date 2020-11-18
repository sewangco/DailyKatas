function findMultiples(integer, limit) {
    let array =[];
    for(let i=integer; i <= limit; i += integer){
      array.push(i)
    }
    return array
  }
//findMultiples(5, 25)
// exp: [5, 10, 15, 20, 25]
