function dontGiveMeFive(start, end)
{
  let sum = 0
 for(i=start; i <= end; i++){
   if(!i.toString().includes('5')){
     sum += 1
   }
 }
  return sum
}

//dontGiveMeFive(4,17)
  //, 12