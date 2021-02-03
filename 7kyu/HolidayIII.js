function fireFight(s){
    return s.split(' ').map(word => word === "Fire" ? word = "~~" : word).join(' ')
}

//alt

function fireFight(s){
    let array =[]
    let oldArr = s.split(' ')
    for (let i =0; i < oldArr.length;i++){
      if(oldArr[i] !== "Fire"){
        array.push(oldArr[i])
      } else{
        array.push('~~')
      }
    }
     
    return array.join(' ')
}

//fireFight("Mast Deck Engine Water Fire")
  //, "Mast Deck Engine Water ~~"
