function rowWeights(array){
    let team =[0,0]
    for( let ar in array){q
      ar%2 === 0? 
        team[0] += array[ar] : team[1] += array[ar]
    }
    return team
  }
  // alt 

  function rowWeights(array){
    let team1= 0;
    let team2=0;
    for( let ar in array){
      if(ar%2 === 0){
        team1 += array[ar]
      } else {
        team2+= array[ar]
      }
    }
    return [team1,team2]
  }

//rowWeights([50,60,70,80])
// [120,140]
