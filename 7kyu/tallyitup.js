var scoreToTally = function(score){
    return 'e <br>'.repeat((score / 5) | 0) + ['','a','b','c','d'][score % 5]
}

scoreToTally(9)
// 'e <br>d