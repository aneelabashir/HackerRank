function getScoreDifference(numSeq) {
    // Write your code here
    
    let firstScore = 0;
    let secondScore = 0;
    
    for(let i = 0 ; i< numSeq.length; i++){
        const currentNumber = numSeq[i];
        if(i%2 ===0){
            firstScore += currentNumber;
        }else{
            secondScore += currentNumber;
        }
        if(currentNumber % 2 === 0){
            numSeq = numSeq.slice(0, i+1).concat(numSeq.slice(i+1).reverse());
        }
        
    }
    return firstScore - secondScore;
 
}
const numSeq = [3, 6, 2, 3, 5];
const result = getScoreDifference(numSeq);
console.log(result); // Output: 1