function getMiddle(s){
    return s.length % 2 == 0 ? s.charAt((s.length-1) / 2) + s.charAt((s.length+1) / 2) : s.charAt(s.length / 2);
 }

 //getMiddle("testings")
// exp: "t"

function getMiddle(s)
{
  if(s.length%2 === 0){
    return s.charAt((s.length-1)/2)+s.charAt(s.length/2)
  } else {
    return s.charAt((s.length-1)/2)
  }
}