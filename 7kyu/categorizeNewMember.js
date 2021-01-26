function openOrSenior(data){
 
    return data.map(([age,handicap])=> age >= 55 && handicap >7 ? 'Senior': 'Open' )
  
  }

  //openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
  //,['Open', 'Senior', 'Open', 'Senior']