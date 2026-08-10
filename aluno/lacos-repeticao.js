// WHILE
// 1

// let x = 1;

// while(x <= 100){
//   console.log(x)
//   x++;
// }

// 2
// let x = 1;

// while (x <= 100) {

// 	if (x % 3 == 0) {
// 		console.log("Fizz");
// 	} else if (x % 5 == 0){
//     console.log("Buzz")
//   } else {
//     console.log(x);
//   }

// 	x++;
// }

// 3
// let x = 0;
// let num = prompt("Insira um valor")

// while(x <= num){
//   console.log(x)
//   x++;
// }

// DO WHILE
do {
  let num = prompt("Insira 1 ou 0: ");

  if (!num.isNumeric()) {
    alert("Insira apenas valores numéricos");
  }
} while (num != 1 || num != 0);
