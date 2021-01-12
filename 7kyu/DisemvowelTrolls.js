function disemvowel(str) {
    let vowels= ['a','e','i','o','u']
    return str.split('').filter((char) => {
      if(!vowels.includes(char.toLowerCase()))
      return char
    }).join('')
    
  }
  //disemvowel("This website is for losers LOL!")
  //"Ths wbst s fr lsrs LL!"
  