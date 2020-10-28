function invert(array) {
    let newArray =[]
       for(let i=0; i<array.length; i++){
       //console.log(array[i])
       if(array[i]>0 || array[i]<0 ){
       newArray.push(array[i] * -1)
       } else if (array[i] === 0){
       newArray.push(array[i])
       }
       }
       return newArray
    }

    //invert([1,2,3,4,5])
    // expected: [-1,-2,-3,-4,-5]