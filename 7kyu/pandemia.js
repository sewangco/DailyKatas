//Pandemia 

function infected(s) {
    // splits the s by the X into an array of strings
    let continents = s.split('X')
    let total = 0;
    let infected = 0;
    for (let continent of continents) {
        return continent
        total += continent.length;
        if (continent.includes('1')) {
            infected += continent.length
        }
    }
    if (total === 0) { return 0 };
    return (infected / total) * 100

}

infected("01000000X000X011X0X")
    //expected: 73.33333333333333,