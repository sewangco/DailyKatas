function isIsogram(str) {
    let array = str.toLowerCase().split('')
    let unique = []
    for (let i = 0; i < array.length; i++) {
        if (array.lastIndexOf(array[i]) === array.indexOf(array[i])) {
            unique.push(array[i].toLowerCase())
        }
    }
    return unique.join() === array.join()
}
  //isIsogram("isogram")
    //, true