//divide and conquer
function divCon(x){
    let numberInt =0;
    let stringInt=0;
    for (let int of x){
    if (typeof int === "number"){
    numberInt += int
    } else if(typeof int === "string"){
    stringInt += parseInt(int)
    }
    }
    return numberInt- stringInt
    }
    
    //divCon([9, 3, '7', '3'])
    // expected: (9+3) - (7+3)= 2
    

    // alternative 

    function divCon(x){
        return x.reduce(function(res,acc){
        console.log(res)
          if (typeof acc === 'number'){
            return res +acc
          }else if (typeof acc === 'string'){
            return res - Number(acc)
          }
        },0)
      }