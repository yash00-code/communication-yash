
let nsp=2;
let nst=1;
for(let row=1;row<=5;row++){
    let ans="";
    //space
    for(let sp=1;sp<=nsp;sp++){
        ans=ans+" ";
        
    }

//star
for(let st=1;st<=nst;st++){
    ans=ans+"*";
    
}
console.log(ans);
//update
if(row<3){
    nst=nst+2;
    nst=nst-1;
}else{
    {
        nst=nst-2;
        nst=nst+1;
}

}
}
