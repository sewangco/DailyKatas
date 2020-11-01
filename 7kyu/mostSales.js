// most sales
function top3(products, amounts, prices) {
    // iterate and create new array of name, revenue and index for each product
    const rev = products.map(function(prodName, index){
    return {name: prodName,
    revenue: amounts[index]*prices[index],
    index: index
    }
    })
    // sort the array from highest revenue products to lowest
    const sorted = rev.sort((a,b)=>{
      return b.revenue-a.revenue || a.index - b.index
      })
      // to only return the top three product names
    return sorted.slice(0,3).map(function(prod){
    return prod.name
    })
  }

// top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399])
// exp: ["Cell Phones", "Vacuum Cleaner", "Computer"]