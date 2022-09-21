function getMoneySpent(keyboards, drives, b) {
    let sum = 0;
    let budgetDiff = 0;
    let count = 0;
    let finalAmmount;

    for(let i=0; i<keyboards.length; i++){
        for(let j=0; j<drives.length; j++){
            sum = keyboards[i] + drives[j];

            if(sum < b){
                count++;
                budgetDiff = b - sum;
                finalAmmount = budgetDiff;

                if(budgetDiff < finalAmmount){
                    finalAmmount = budgetDiff;
                }
            } 

           
        }
        
    }

    if(count == 0){
        return -1;
    } else {
        return b - finalAmmount;
    }
  
}

const func = getMoneySpent([3,1], [5,2,8], 10);
console.log(func);
const func2 = getMoneySpent([5], [4], 5);
console.log(func2);