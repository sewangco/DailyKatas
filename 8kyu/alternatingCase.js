// String.prototype.toAlternatingCase = function () {
//   let alternatingCase= []
//  for(let char of this){
//    if (char.toLowerCase()=== char){
//      alternatingCase.push(char.toUpperCase())
//    } else {
//      alternatingCase.push(char.toLowerCase())
//    }
//  }
//   return alternatingCase.join('')

// alt 
String.prototype.toAlternatingCase = function () {
    return this.split('').map((char => char === char.toUpperCase()? char.toLowerCase(): char.toUpperCase())).join('')
    }
    
    //"hello WORLD".toAlternatingCase()
    //"HELLO world"


   //  console.log(this) to get the given string 