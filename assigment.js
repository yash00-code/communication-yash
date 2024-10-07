let num = 7;

if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

for (let i = 1; i <= 7; i++) {
    if (i % 2 === 0) {
      continue; // Skips even numbers
    }
    console.log(i); // Prints odd numbers only
  }

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
        break; // Exits the inner loop when i=2 and j=2
      }
      console.log(`i = ${i}, j = ${j}`);
    }
  }
    

  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      console.log(`${i} is divisible by 3`);
      break; // Exits the loop after first divisible by 3 number is found
    }
  }

  

  let x = 0;

while (x < 5) {
  x++;
  if (x === 3) {
    continue; // Skips the rest of the code when x is 3
  }
  console.log(x);
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log(`${i} is divisible by both 2 and 3`);
    } else if (i % 2 === 0) {
      console.log(`${i} is divisible by 2`);
    } else if (i % 3 === 0) {
      console.log(`${i} is divisible by 3`);
    } else {
      console.log(`${i} is not divisible by 2 or 3`);
    }
  }