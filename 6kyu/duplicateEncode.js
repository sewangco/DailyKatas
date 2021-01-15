function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(let i=0; i< word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}

//duplicateEncode("recede")
//,"()()()"