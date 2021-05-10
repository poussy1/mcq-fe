function generateArrayRandomNumbers(length){
    var arr = [];
    while(arr.length < length){
        var r = Math.floor(Math.random() * (length));
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

export function shuffleArray(array){
   const shuffledIndicies = generateArrayRandomNumbers(array.length)
   var shuffledArray=[]
   shuffledIndicies.forEach(id =>{
        shuffledArray.push(array[id])
   })

   return shuffledArray
}