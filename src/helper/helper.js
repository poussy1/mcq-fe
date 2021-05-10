function generateArrayRandomNumbers(){
    var arr = [];
    while(arr.length < 3){
        var r = Math.floor(Math.random() * (3));
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

export function shuffleArray(array){
   const shuffledIndicies = generateArrayRandomNumbers()
   var shuffledArray=[]
   shuffledIndicies.forEach(id =>{
        shuffledArray.push(array[id])
   })

   return shuffledArray
}