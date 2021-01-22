function arrayDiff(a, b) {
    return a.filter(num => !b.includes(num))
     
  }

//arrayDiff([3,4], [])
//, [4],