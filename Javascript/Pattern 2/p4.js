
// 0 0 0 0 0 0 0 0 0 0 0 0 0
// 0 a b c d e f 5 4 3 2 1 0
// 0   a b c d e 4 3 2 1   0
// 0     a b c d 3 2 1     0
// 0       a b c 2 1       0
// 0         a b 1         0
// 0           a           0
// 0         1 b a         0
// 0       1 2 c b a       0
// 0     1 2 3 d c b a     0
// 0   1 2 3 4 e d c b a   0
// 0 1 2 3 4 5 f e d c b a 0
// 0 0 0 0 0 0 0 0 0 0 0 0 0

var n = 5;

var str = ""
var ascii = String.fromCharCode(97)

for (i = -(n + 1); i <= n + 1; i++) {
    for (j = -(n + 1); j <= n + 1; j++) {

        if (Math.abs(i) == (n + 1) || Math.abs(j) == (n + 1)) {
            str += "0"
        }
        else if ((i <= 0 && j <= 0 && i <= j) || (i >= 0 && j >= 0 && i >= j)) {
            var a = 97;
            var b = Math.abs(i - j)
            str += String.fromCharCode(a + b)
        }
        else if ((i > 0 && j < 0 && i + j >= 0) || (i < 0 && j > 0 && i + j <= 0)) {
            str += Math.abs(i + j) + 1
        }
        else {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);
