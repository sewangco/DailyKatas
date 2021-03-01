
const findLongest = l => l
   .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
 //findLongest([9000, 8, 800])
 //, 9000