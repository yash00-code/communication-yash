/*let nst=1;
let nsp=4;
for( let row=1;row<=5;row++){
  //space
  for( let sp=1;sp<=nsp;sp++){
   c
  }
  //star
  for(let star=1;star<=nst;star++){
    process.stdout.write("*")
  }
  console.log();

if (row<3) {
  nsp=nsp-1;
  nst=nst+2;
} else {
  nsp=nsp+1;
  nst=nst-2;
}
  
} */

let nst=5;
let nsp=0;

for(let row=1;row<=5;row++){
//space
for( let sp=1;sp<=nsp;sp++){
  process.stdout.write(" ")
}
//star
for(let st=1;st<=nst;st++){
  process.stdout.write("*")
}
//next lines
console.log();
//update
if (row<3) {
  nst=nst-2;
  nsp=nsp+1;
} else {
  nst=nst+2;
  nsp=nsp-1;
}
}


  