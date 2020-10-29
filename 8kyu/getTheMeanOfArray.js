// get the mean of an array 

function getAverage(marks){
    return Math.floor(marks.reduce((a,b)=>{
    return a+b 
    })/ marks.length)
   }

//getAverage([1,2,3,4,5])
//exp: 3
