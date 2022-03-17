// Formula

let n = 2, z = 3.0, i = 4, k = 1, theta = 3,   // Assign Variables

a = Math.abs(z)

ans1 = Math.sqrt(a);

x = (theta + (2*k*Math.PI))/n  // form 1
y = (i * x)                    // form 2

ans2 = Math.pow(Math.E,y);


answer = ans1 * ans2;
console.log("Result of the formula: ", answer);


