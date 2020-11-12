function minValue(values){
    let newArray = []
    for(let value of values){
      if(!newArray.includes(value)){
        newArray.push(value)
      }
    }
    return +newArray.sort((a,b)=> { 
      return a-b
    }).join('')
  }

// minValue([4, 8, 1, 4])
//exp: 148