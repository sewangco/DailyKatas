function greet (name, owner) {
    if(name===owner){
      return "Hello boss"
    }else{
      return "Hello guest"
    }
  }

  greet('Greg', 'Daniel')
  //'Hello guest'