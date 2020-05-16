function highestRank(arr){
    let occur = [], best, best_occur = 0;
    arr.forEach(x => {
        if(!occur[x]){
            occur[x] = 0;
        }
        occur[x]++; 
    })
    occur.forEach((occur, el, arr) => {
        if(!best && occur){
            best = el;
            best_occur = occur;
        }
        if(best_occur <= occur && best < el){
            best = el;
            best_occur = occur;
        }
    })
    return best;
}



console.log(highestRank([1,1,1,1,3,4,5,6,7,3, 11, 11, 11, 11]));