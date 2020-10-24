//the office I
function outed(meet, boss) {
  let rating = 0;

  for (let name in meet) {
    if (name === boss) {
      // meet[name] get the value from the object 
      rating += meet[name] * 2;
    } else {
      rating += meet[name];
    }
  }
  // gets the keys the from object meet 
  return rating / Object.keys(meet).length <= 5
    ? "Get Out Now!"
    : "Nice Work Champ!";
}

//outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')
//expected: 'Get Out Now!'
