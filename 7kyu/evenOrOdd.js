function evenOrOdd(str) {
    let evens= 0;
    let odds=0;
    for(let i=0; i<= str.length-1;i++){
    console.log(str[i])
    if(str[i]%2 === 0){
    evens += +str[i]
    } else {
    odds += +str[i]
    }
    }
    
    if(evens> odds){
    return "Even is greater than Odd"
    } else if(odds === evens){
    return "Even and Odd are the same"
    } else if(evens < odds)return "Odd is greater than Even"
    
    }

    // evenOrOdd('112')
// exp: ' Even is greater than Odd'