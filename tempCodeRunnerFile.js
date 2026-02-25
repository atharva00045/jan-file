let bg=[1,2,2,3,4,4];
let arrl=[];

for(let e of bg){
    if(!arrl.includes(bg[e])){
        arrl.push(bg[e])
    }
}

console.log(arrl)