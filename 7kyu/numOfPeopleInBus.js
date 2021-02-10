var number = function(busStops){
  
    return busStops.reduce((rem, p)=> rem + p[0] - p[1],0)
  }

  //alt

  var number = function(busStops){
    let sum =0
    for (let i =0; i< busStops.length; i++){
      sum += busStops[i][0]
      sum -= busStops[i][1]
    }
    return sum
  }

  // alt
  var number = function(busStops){
  
    return busStops.reduce((rem, [on,off])=> rem + on - off,0)
    
  }