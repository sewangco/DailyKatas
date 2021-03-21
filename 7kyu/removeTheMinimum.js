function removeSmallest(numbers) {
    return numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));
  
  }
  removeSmallest([5, 3, 2, 1, 4])

  function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }