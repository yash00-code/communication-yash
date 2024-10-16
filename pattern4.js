let nsp=0;
let val=65;
for(let row=1;row<=5;row++){
    let ans=" ";
   //space
   for(let sp=1;sp<=nsp;sp++){
    ans=ans+" ";
   }

    //star
    for(st=0;st<5-row+1;st++){
        ans=ans+(String.fromCharCode(val+st))

    }val++;
    console.log(ans);
    nsp=nsp+1;    
}
let num=2345;
let nod=0;
while(num>0){
    num=Math.floor(num/10);
    nod++;
}

let num1= 6789;
while(num1>0){
    let id=num1%10;
    console.log(id);
    num=Math.floor(num1/10);
    
}
/*
let num=4578;
let nod=0;
let temp=num;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
let div=Math.pow(10,nod-1);
console.log(div);


while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div;
    div=Math.floor(div/10);
    */
 while(num>0){
    let fd=Math.floor(num/div)
    console.log(fd);
    num=num%div;
    div=Math.floor(div/10);
 }
 let num=4578;
 let nod=0;
 let temp=num;
 while(temp>0){
     temp=Math.floor(temp/10)
     nod++;
 
 }
 let div=Math.pow(10,nod-1)
 console.log(div);
 
 
 while(num>0){
     let fd=Math.floor(num/div);
     console.log(fd);
     num=num%div
     div=Math.floor(div/10);
 }