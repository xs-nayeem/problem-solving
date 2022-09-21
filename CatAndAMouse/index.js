function catAndMouse(x, y, z) {
    const diff1= Math.abs(z-x);
    const diff2 = Math.abs(z-y);

    if(diff1 < diff2){
        return 'Cat A'
    } else if(diff1 > diff2){
        return 'Cat B'
    } else {
        return 'Mouse C'
    }

}

const cat = catAndMouse(1,2,3);
console.log('cat', cat);
const mouse = catAndMouse(4,3,6);
console.log('mouse', mouse);