function squareDigits(num){
    let empty = []
    num.toString().split('').forEach(number=> {
       return empty.push(number*number)
    })
    return +empty.join('')
    }
    //squareDigits(9119)
    // exp: 811181