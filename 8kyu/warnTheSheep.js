function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }

  function warnTheSheep(queue) {
    let reverse= queue.reverse()
    for (let i=1; i<reverse.length-1;i++){
      if(reverse[i]=== "wolf"){
        return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!` 
      }
      else if(reverse[0]==="wolf"){
        return "Pls go away and stop eating my sheep"
      }
    }
    }