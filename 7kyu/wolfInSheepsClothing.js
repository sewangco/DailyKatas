//A wolf in sheep's clothing

function warnTheSheep(queue) {
const position =queue.reverse().indexOf('wolf');
return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`

}
warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])
// expected: "Oi! Sheep number 2! You are about to be eaten by a wolf!"

//alternative 
function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf')-1 
        return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
        }
    