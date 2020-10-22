//Smallest unused ID

function nextId(ids){
    for (let i=0;i < ids.length+1;i++){
    if(!ids.includes(i)){
    return i
    }
    }
    
  }
  nextId([0,1,2,3,4,5])
  //ecpected: 4