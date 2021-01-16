function isValidWalk(walk) {
    let dx = 0
    let dy = 0
    let dtotal= walk.length
    for(let i=0; i < walk.length; i++){
      if(walk[i] === 'n'){
        dy-- 
      } else if (walk[i] === 's'){
        dy++ 
      } else if (walk[i] === 'e'){
        dx++ 
      } else if (walk[i]=== 'w') {
        dx--
      }   
    }
    return dtotal ===10 && dx===0 && dy===0
  }

  //isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
//'should return true'