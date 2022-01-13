let array1 = ["2","4","6","8"]
let array2 = ["1","3","5","7"]

let array3 = []

for (let x = 0; x < array1.length; x++)
{
    array3[x] = array1[x] * array2[x];
}

console.log(array3);