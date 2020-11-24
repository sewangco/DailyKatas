// form the largest 

// function maxNumber(n){
//  let string = n.toString().split('')
// return +string.sort((a,b)=>{
//   return b-a 
// }).join('')
// }

function maxNumber(n){
    return +n.toString().split('').sort((a,b)=>{
      return b-a 
    }).join('')
    }

//maxNumber(63792)
// exp: 97632