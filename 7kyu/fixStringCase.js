function solve(s){
    let lowerCase= [];
    let upperCase= []; 
      for (let i=0; i< s.length; i++){
        s[i].toLowerCase() === s[i] ? 
          lowerCase.push(s[i]) : upperCase.push(s[i])
      }
    return upperCase.length > lowerCase.length ? 
      s.toUpperCase() : s.toLowerCase()
  }
  
  //solve("CODe")
  // exp: "CODE"