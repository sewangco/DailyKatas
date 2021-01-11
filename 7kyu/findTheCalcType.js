function calcType(a, b, res) {
    return a + b === res ? 'addition':
    a - b === res ? 'subtraction':
    a * b === res ? 'multiplication':
    a / b === res ? 'division':
    null
   
   }
   //calcType(1,2,3)

   // alt
   function calcType(a, b, res) {
    if(a+b === res){
      return 'addition'
    }else if (a-b === res){
      return 'subtraction'
    } else if (a*b === res){
      return 'multiplication'
    } else if (a/b === res){
      return 'division'
    }
  }