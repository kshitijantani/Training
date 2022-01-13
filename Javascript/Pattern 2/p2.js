var n = 5;
var str = ""
for (let i = 0; i <= 2 * n; i++) {
    for (j = 0; j <= 2 * n; j++) {
        if ((i <= (n - 1) && j <= (n - 1) && (i + j) >= n - 1) ||
            (i >= n && j >= n && (i + j) < (3 * n))) {
            str += "@"
        }
        else {
            str += " "
        }

    }
    str += "\n"
}
console.log(str);



// var n = 5;
// var str = ""
// for (let i = 0; i <= n + n; i++) {
//     for (j = 0; j <= n + n; j++) {
//         if ((i + j) <= n - 1 ||
//             (i >= n && j >= n && (i + j) < (3 * n))) {
//             str += "@"
//         }
//         else {
//             str += " "
//         }

//     }
//     str += "\n"
// }
// console.log(str);