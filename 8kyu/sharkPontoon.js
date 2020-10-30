//Holiday VI- shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let youTime = pontoonDistance/ youSpeed
    let sharkTime = sharkDistance / (dolphin? sharkSpeed/2 : sharkSpeed)
    // since if there is a dolphin you are there in half the time, making the shark slower 
    return sharkTime < youTime ? "Shark Bait!" : "Alive!"
    
    }

//shark(12, 50, 4, 8, true)
// exp: "Alive!"
