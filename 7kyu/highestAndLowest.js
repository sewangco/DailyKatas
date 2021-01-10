function highAndLow(numbers){
    let numbers2 = numbers.split(' ')
    console.log(numbers2)
    return `${Math.max(...numbers2)} ${Math.min(...numbers2)}`
  }
//highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
// exp: "542 -214"