function removeSmallest(numbers) {
    return numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
  
  }
  removeSmallest([5, 3, 2, 1, 4])