//Capitalization and Mutability

function capitalizeWord(word) {
    let upperCase = word[0].toUpperCase() + word.slice(1)
    return upperCase;
  }

  // alt
  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1)
  }