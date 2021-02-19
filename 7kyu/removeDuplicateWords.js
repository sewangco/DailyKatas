function removeDuplicateWords (s) {
    let list = s.split(' ')
    let noDuplicates = []
    for(let i =0; i< list.length; i++){
      if (!noDuplicates.includes(list[i])){
        noDuplicates.push(list[i])
      }
    }
    return noDuplicates.join(' ')
  }

  //alt 
  function removeDuplicateWords (s) {
     return [...new Set(s.split(' '))].join(' ')
  }