//find all pairs

function duplicates(array){
    let pairs =0;
    let newArray = array.sort(function(a,b){
      return b - a;
    })
    for (let i=0; i <array.length; i++){
      if(array[i] === array[i+1]){
        pairs++
        i++;
        }
      }
      return pairs
    }


    //duplicates([1, 2, 5, 6, 5, 2])
    //expected: 2