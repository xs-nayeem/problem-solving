function matchingStrings(stringList, queries) {
    let arr = [];
    
    for(let i=0; i<queries.length; i++){
        let count = 0;
        for(let j=0; j<stringList.length; j++){
            if(queries[i] == stringList[j]){
                count++;
            }
        }
        arr.push(count);
    }

    return arr;

}

const out = matchingStrings(["abcde", "sdaklfj", "asdjf", "na", "basdn", "sdaklfj", "asdjf", "na", "asdjf", "na", "basdn", "sdaklfj", "asdjf"], ["abcde","sdaklfj","asdjf","na","basdn"]);

console.log(out);