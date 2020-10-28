function generateRange(min, max, step){
    let arrayOfInt = [];
    for (let i=min ; i <= max; i += step){
    arrayOfInt.push(i)
    }
    return arrayOfInt
    }

    // alt


    function generateRange(min, max, step){
        let arrayOfInt = [];
        while(min <= max){
        arrayOfInt.push(min)
        min += step
        }
        return arrayOfInt
        
        }

        //generateRange(2, 10, 2)
// expected : [2,4,6,8,10]