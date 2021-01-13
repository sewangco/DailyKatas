function findShort(s) {
    let words = s.split(' ')
    let wordLength = words.map(word => {
      return word.length
    })
    return Math.min(...wordLength)
  }
//findShort("bitcoin take over the world maybe who knows perhaps")
//3

//alt 

function findShort(s) {
    return Math.min(...s.split(' ').map(word => word.length))
  }