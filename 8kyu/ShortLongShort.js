// function solution(a, b){
//     if(a.length < b.length){
//       return a.concat(b).concat(a)
//     } else return b.concat(a).concat(b)
//   }

  // alt
function solution(a, b){
    return a.length < b.length ? a+b+a : b+a+b
  }

  //solution('13', '200')
// exp: '1320013'
