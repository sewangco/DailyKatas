//Are you playing banjo?

function areYouPlayingBanjo(name) {
    if(name.startsWith('R')|| name.startsWith('r')){
     return `${name} plays banjo`;
    } else return `${name} does not play banjo`
   
  }
  
  //areYouPlayingBanjo("Martin")
  // expected: "Martin does not play banjo