function enough(cap, on, wait) {
    if(cap-on-wait > 0){
      return 0
    }else { return wait+ on - cap}
  }

  //alt

  function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }

  function enough(cap, on, wait) {
    return wait+on >cap? wait+on -cap : 0
   }
   //enough(100, 60, 50)
   //exp :10)
