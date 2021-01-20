function XO(str) {
    let arr = str.toLowerCase().split('')
    let xs = 0
    let os = 0
    for (let i =0; i < arr.length ; i++){
      if(arr[i] ==='x'){
        xs += 1
      } else if (arr[i] ==='o'){
        os += 1
      }
    } 
    if (xs === os){
    return true
    }  else {
      return false
    }
  }
  //XO("xxxm")
  //false


  // alt 


function XO(str) {
    let arr = str.toLowerCase().split('')
     return arr.filter(x => x === 'x').length === arr.filter(x => x === 'o').length
  }