function spinWords(string){
    let arrOfWords = string.split(' ')
    return arrOfWords.map(word => {
      if (word.length >= 5){
        return word.split('').reverse().join('')
      } else {
        return word
      }
    }).join(' ')
  }

  //alt 


function spinWords(words){
    return words.split(' ').map(word => {
      return word.length >= 5 ? word.split('').reverse().join('') : word
    }).join(' ')
  }

//spinWords("Hey fellow warriors")
// "Hey wollef sroirraw"