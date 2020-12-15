var palindromeChainLength = function(n) {
    var r = 1 * n.toString().split('').reverse().join('');
    return n - r && 1 + palindromeChainLength(r + n);
  };
  palindromeChainLength(87)
  //4)

  // n-r = 87-78= 9
  // 1 + (165)
  // 561-165=