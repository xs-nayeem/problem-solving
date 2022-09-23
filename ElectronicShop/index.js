function getMoneySpent(keyboards, drives, b) {
    let sum = 0;
    let arr = [];
    let count = 0;

    for(let i=0; i<keyboards.length; i++){
        sum = 0;
        for(let j=0; j<drives.length; j++){
            sum = keyboards[i] + drives[j];

            if(b > sum){
                arr.push(sum);
            } 
        }
        
    }

    if(arr.length == 0){
        return -1;
    } else {
        return Math.max(...arr);
    }
  
}

const func = getMoneySpent([3,1], [5,2,8], 10);
console.log(func);
const func2 = getMoneySpent([5], [4], 5);
console.log(func2);
const func3 = getMoneySpent([40,50,70,60], [5,8,12, 29], 100);
console.log(func3);
