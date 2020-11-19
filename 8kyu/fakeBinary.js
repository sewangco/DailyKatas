function fakeBin(x){
    let newArray=[]
    for(let i =0; i < x.length;i++){
      if(x[i]< 5){
        newArray.push(0)
      } else if (x[i] >= 5){
        newArray.push(1)
      }
    }
      return newArray.join('')
    }

//fakeBin('45385593107843568')
// exp: '01011110001100111'

// alt 
function fakeBin(x){
    return x.split('').map(x => x < 5 ? 0 : 1 ).join('')
}
