function disemvowel(str) {
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    let splitStrArray = str.split("")
    
    let filteredStr = splitStrArray.filter((letter) => !vowels.includes(letter)).join("");
    
    return filteredStr
  }