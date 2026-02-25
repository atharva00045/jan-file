function prime(num){
let isPrime=true;
if(num<2){
    isPrime=false;
}else{
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
        }
    }
}
if(isPrime){
    console.log("Prime");
}
else{
    console.log("Not prime");
}
}
prime(9);