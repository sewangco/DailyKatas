function digital_root(n) {
    let arrayOfNums = n.toString().split('')
    return arrayOfNums.reduce((acc,cur)=> {
      let sum= Number(acc) + Number(cur);
      if(sum >= 10){
        return sum.toString().split('').reduce((acc,cur)=>{
          return +acc + +cur
        })
      } else if(sum < 10){
        return sum
      }
     
    },0)
    
  }


  //alt 
  function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce((acc, val) => { 
      return acc + +val; 
    }, 0));
}
//digital_root(456)
//, 6