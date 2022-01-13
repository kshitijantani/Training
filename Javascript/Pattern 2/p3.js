// --------------------------For odd variable------------------------------------------
var n = 5;

var str = ""

for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        if (i == (n - 1) / 2 && j == (n - 1) / 2) {
            str += "0"
        }
        else if (i == j) {
            str += "\\"
        }
        else if (i + j == n - 1) {
            str += "/"
        }
        else if ((i == 0 && j <= n - 1) || (i == n - 1 && j <= n - 1)) {
            str += "-"
        }
        else if ((j == 0 && i <= n - 1) || (j == n - 1 && i <= n - 1)) {
            str += "|"
        }
        else {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);


// -------------------------------For even variable-------------------------------------------

