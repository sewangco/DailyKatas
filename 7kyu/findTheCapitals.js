function capital(capitals){
    return capitals.map((pair)=>{
    return `The capital of ${pair.state|| pair.country} is ${pair.capital}`
   })
   }

state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0]

// exp: "The capital of Maine is Augusta"