function likes(names) {
    if(names.length < 1){
      return `no one likes this`
    } else if(names.length === 1  ){
      return `${names.join()} likes this`
    } else if(names.length < 3){
      return `${names.join(' and ')} like this`
    } else if(names.length === 3){
      return `${names.slice(0,2).join(', ')} and ${names.slice(2)} like this`
    } else if (names.length >= 4){
      return `${names.slice(0,2).join(', ')} and ${names.length-2} others like this`
    }
    
  }
  
  //likes(['Jacob','alex', 'bob', 'fru','rya'])
  //`Alex, Jacob and 2 others like this'