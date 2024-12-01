function longestWord(string){
    let word = string.split(" ")
    let longest = ""
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > longest.length) {
            longest = word[i]
            
            
            
        }
        
            
    
        
        
        
        
        
    }
    return longest
    

}
console.log(longestWord("I am Learning Website Development."));
