function getTotalX(a, b) {
    let res = 0;
    let count1 = 0;
    let count2 = 0;
    let first = a[0];
    let last = b[b.length - 1];


    for(let i=first; i<=last; i++){
        count1 = 0;
        count2 = 0;
        for(let j=0; j<a.length; j++){

            if(i % a[j] === 0){
                count1++;
            }
        }
        if(count1 == a.length){
            for(let k=0; k<b.length; k++){
                if(b[k] % i == 0){
                    count2++;
                }
            }
            if(count2 == b.length){
                res++;
            }
        }
    }
    return res;

}

const arr = getTotalX([1], [100]);
console.log(arr)