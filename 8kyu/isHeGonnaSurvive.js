// IsHeGonnaSurvive

function hero(bullets, dragons){
    if(bullets/dragons >=2){
    return true
    } else return false
    }

//hero(10, 5)
// exp: true


//alt

function hero(bullets, dragons){
    return bullets/2 >= dragons
    }