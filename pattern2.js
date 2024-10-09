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

/*for( let row =1;row<=5;row++){
    let ans=" ";
    

    for(let star=1;star<=row;star++){
        ans=ans+row
    }
    console.log(ans);
    
}*/
/*
let nsp=0;
let nst=5;
let val=5;
for(let row=1;row<=5;row++){
    //space
   let ans= " ";
   for( let sp=1;sp<=nsp;sp++){
    process.stdout.write(" ")
   }
   //star
   for(let st=1;st<=nst;st++){
      ans=ans+val
   }val--;

   //update
   console.log(ans);
   nst=nst-1;
   nsp=nsp+1;
   
}*/
/*let nsp=0;
for( let row=1;row<=5;row++){
    //star
    for(let sp=1;sp<=nsp;sp++){
       process.stdout.write(" ")
    }
    process.stdout.write("*")

    console.log();

    //update
    nsp=nsp+1;
    
    
}*/

/*
for(let row=1;row<=5;row++){
    //colom
    for(let colom=1;colom<=5;colom++){
        if (row+colom==6||row==colom ) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ") 
        }
    }
    console.log();
    

}*/
/*for(let row=1;row<=7;row++){
    //colom
    for(let col=1;col<=7;col++){
        if(row==1){
            if(col==1 || col>=4){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }

        }else if(row<=3){
            if(col==1 || col==4){
                process.stdout.write("*")
            }else{
          process.stdout.write(" ")
            }


        }else if(row==4){
            process.stdout.write("*")

        }else if(row<=6){
            if(col==4 || col==7){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }

        }else{
            if (col<=4 || col==7){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }

        }
    }
    console.log();
    
}*/


  