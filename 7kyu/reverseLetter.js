function reverseLetter(str) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
                't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    return str.split('').filter(letter => alpha.includes(letter)).reverse().join('')
  
  }
  //reverseLetter("ultr53o?n")
  //,"nortlu"  