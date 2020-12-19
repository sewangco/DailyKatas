function getSum(a,b ){
    sum = 0;
    if(a < b){
      while(a <= b) sum += a++;
  }else{
      while(a >= b) sum += a--;
  }
    return sum;
  }
  //getSum(0,1)
  //1