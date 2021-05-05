//String repeat 
function repeatStr(n, s) {
  return s.repeat(n)
}

//repeatStr(3, "*")
//"***"

function repeatStr(n, s) {
  let str = []
  for (let i = 0; i < n; i++) {
    str.push(s)
  }
  return str.join('')
}