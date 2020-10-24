//Ordered Count of Characters

var orderedCount = function (text) {
    // turn string into array
    const arr = text.split('')
    //console.log(arr)
    // get rid of all the duplicate by returning only the characters that have the same index as the character index
    const noDuplicates= arr.filter(function(char,index){
      console.log(arr.indexOf(char))
      return arr.indexOf(char) === index
    })
    return noDuplicates.map(function(el){
      // how many times the char appears in the string 
      return [el,text.split(el).length-1]
      })
    }
  
  //orderedCount("abracadabra")
  // expected : [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
  
  // a has index of 0, when it appears again at index 3, it doesn't fulfill the indexOf(char) === index