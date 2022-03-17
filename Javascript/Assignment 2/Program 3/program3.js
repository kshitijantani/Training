let a = 3,b = 4,c = 5;

let D = (b*b - (4*a*c))
let root1 = (-b + Math.sqrt(D))/2*a
let root2 = (-b - Math.sqrt(D))/2*a

console.log(D);

if (D > 0)
  {
   console.log("Equation has two real and distinct roots");
   console.log("x = " + root1);
   console.log("y = " + root2);
  }

else if(D < 0)
 {
  console.log("Equation has two complex roots");
  console.log("x = " + root1);
  console.log("y = " + root2);
 }

else
 {
 console.log("Equation has only same roots");
 console.log("x = " + root1);
  console.log("y = " + root2);
 }
