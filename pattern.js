//process.stdout.write("yash")
//process.stdout.write("yash")

for(let row=1;row<=5;row=row+1){
    //stars ki chapai
    for(let star=1;star<=row;star=star+1){
        process.stdout.write("*")
    }
    console.log();
    
}

for(let row=1;row<=5;row=row+1){
   
  for(let star=1;star<=5-row+1;star=star+1){     
    process.stdout.write("*")
}
console.log();

}
for(let row=1;row<=5;row=row+1){
   
    for(let star=1;star<=5-row+1;star=star+1){     
      process.stdout.write("*")
  }
  console.log();
  
  }
  for(let row=1;row<=5;row=row+1){
   
    for(let star=1;star<=5-row+1;star=star+1){     
      process.stdout.write("*")
  }
  console.log();
  
  }
  for(let row=1;row<=5;row=row+1){
   
   // for(let star=1;star<=5-row+1;star=star+1){     
     // process.stdout.write("*")
     for(let star=5;star>=row;star=star-1){
      process.stdout.write("*")
     }
      console.log();
      
  }

  let nos=4;
  let nop=1;
  for( let row=1;row<=5;row++ ){

    //space
    for(let sp=1;sp<=nos;sp++){
      process.stdout.write(" ")
    }
    //star
    for(let star=1;star<=nop;star++){
      process.stdout.write("*")
    }
    //gap between them
    console.log();
    //update
    nos=nos-1;
    nop=nop+1;
    
  } 

let =0;
let =5;
for(let row=1;row<=5;row++){
    //space
    for(sp=1;sp<=nsp;sp++){
      process.stdout.write(" ")
    }

    //star
    for(let star=1;star<=nst;star++){
      process.stdout.write("*")
    }
    //next line 
    console.log();
    
    //update
    nsp=nsp+1;
    nst=nst-1;
    
}

let nsp=4;
let nst=1
for(let row=1;row<=5;row++){
//space
for( let sp=1;sp<=nsp;sp++){
  process.stdout.write(" ")
}
//star
for(let st=1;st<=nst;st++){
  process.stdout.write("*")
}
//lines below
console.log();
//update
nsp=nsp-1;
nst=nst+2;

}





  
  
  