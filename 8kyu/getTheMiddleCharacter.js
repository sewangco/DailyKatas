function getMiddle(s){
    return s.length % 2 == 0 ? s.charAt((s.length-1) / 2) + s.charAt((s.length+1) / 2) : s.charAt(s.length / 2);
 }

 //getMiddle("testings")
// exp: "t"