function solve(a,b){
    // map returns an array 
    // filters through b and then a and if they match, it returns the amount of times its true = length
     return b.map(x=> a.filter(n => n === x).length);
      
      }
    
    //solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap'])
    // exp: [2, 1, 0]