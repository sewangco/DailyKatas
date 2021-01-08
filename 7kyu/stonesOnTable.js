function solve(stones) {
    let removed =0;
    for(let i=0; i < stones.length;i++){
      if (stones[i] === stones[i+1]){
        removed += 1
      }
    }
    return removed
  }
  //solve("RRGGBB")
  //3