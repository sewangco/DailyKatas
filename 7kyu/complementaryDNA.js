function DNAStrand(dna){
    let newDna= []
    let array = dna.split('')
    array.forEach(char => {
      if (char === 'A'){
        newDna.push('T') 
      }else if(char === 'T'){
        newDna.push('A') 
      } else if(char === 'G'){
        newDna.push('C') 
      } else if(char === 'C'){
        newDna.push('G') 
      } 
    })
    return newDna.join('')
  }
  //DNAStrand("GTAT")
  //,"CATA",

  //alt 

  var pairs = {'A':'T','T':'A','C':'G','G':'C'};
  function DNAStrand(dna){
    
    return dna.split('').map(function(v){ 
      return pairs[v]
    }).join('');
  }