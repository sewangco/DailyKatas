function solution(str){
    let newArray= []
      for (let i=str.length-1; i >= 0 ;i--){
        newArray.push(str[i])
      }
      return newArray.join('')
    }

function solution(str){
    return str.split('').reverse().join('')
}
//solution('world')
// 'dlrow'