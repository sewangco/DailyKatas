//Beginner Series #2 Clock

function past(h, m, s){
    let total = 0;
    if (h >0 || m >0 || s>0){
    total += h*3600000 + m *60000 + s*1000
    }
    return total
    }
    
    //past(0,1,1)
    
    // expected : 61000,  1 sec= 1000 ms, 1 min =60000 ms,1 hr = 60*60000=3600000 ms