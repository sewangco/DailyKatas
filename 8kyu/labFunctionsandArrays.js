//Lab functions and arrays


const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sumOfIntegers (array){
  let sum = 0;
  for(let i=0;i< array.length;i++){
    if(typeof array[i] === 'number'){
      sum += array[i]
    } else if(typeof array[i] === "string"){
      sum += array[i].length
    } else if (array[i]=== true){
      sum += 1
    }
  }
  return sum
}
//sumOfIntegers(mixedArr)
// should return: 57

var cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

const capCities = cities.map(city=> city.slice(0,1).toUpperCase() + city.slice(1))

//console.log(capCities)


const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];
 
const averageCalories = menu.reduce((sum,item)=> {
  return sum += item.calories /menu.length
},0) 

 
//console.log(averageCalories); // 278

var people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 20 },
  { name: "Nettie", age: 21 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

const ofDrinkingAge= people.filter(peeps => 
  peeps.age >= 21)
 
//console.log(ofDrinkingAge);
// [ 
//   { name: 'Candice', age: 25 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Nettie', age: 21 } 
// ]


const numbers = [1, 60, 112, 123, 100, 99, 73, 45];
 
const result = numbers.filter(number => number%2 !== 0 && number>42)
 
//console.log(result);
// [ 123, 99, 73, 45 ]