//Challenge area
const todos = ['walk the dog', 'eat breakfast','workout','coding challenge','read book']

//delete the 3rd item
todos.splice(2,1)

// add a new item the end
todos.push('new todo')

// remove the first item from the list 
todos.shift()

console.log(`You have ${todos.length} todos!`);
// console.log(todos);

todos.forEach(function(todo,index){
    let num = index + 1
    console.log(`${num}. ${todo}`);
})
