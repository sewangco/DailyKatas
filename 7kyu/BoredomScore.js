let object ={
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS : 8,
    retail : 5,
    cleaning : 4,
    'pissing about' : 25
}  

function boredom(staff){
let total= 0;
for (let person in staff){
      total += object[staff[person]]
  }
if (total <= 80){
  return "kill me now"
}
if ( total > 80 && total < 100){
      return 'i can handle this'
}
 return  'party time!!'
     
}  



// boredom({tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' })
// exp : 'kill me now'
