function filter_list(l) {
    return l.filter(char => typeof char === "number")
}

  //filter_list([1,'a','b',0,15])
  // ,[1,0,15]