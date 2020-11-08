function wordValue(a){
// map iterates through each string s
// s = the array of strings, i is the index
// s.split() = puts each string in its own array-> array of arrays
// s.split('')= instead of a single string in each array,its each letter as a stirng in the array
// .reduce((accumulator,currVal)=> accumulator = gives the first letter of each string as an array
// currVal is the current letter the function iterating over
// for example "abc" = 0 +1 +0 =1
// 1 +1 + 1 =3 
// 3 +1 +2 = 6 

    return a.map((s,i)=>
    
    (i+1)*s.split('').reduce((accumulator,currVal)=> accumulator + 1 + "abcdefghijklmnopqrstuvwxyz".indexOf(currVal),0))
    
    }
    
    
    //wordValue(["codewars","abc","xyz"])
    // [88,12,225]