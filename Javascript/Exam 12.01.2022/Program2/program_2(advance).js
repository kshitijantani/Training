var n = 7;
var str = ""

for (i = -(n + 1); i <= n + 1; i++) {
    for (j = -(n + 1); j <= n + 1; j++) {

        z = 97
        if (j == -(n + 1) || j == (n + 1)) {
            str += "|"
        }
        else if ((i == -(n + 1) || i == (n + 1))) {
            str += "="
        }
        else if (i == 0 && j == 0) {
            str += "x"
        }
        else if (-i == -j && i == j) {
            str += "\\"
        }
        else if (i == -j && -i == j) {
            str += "/"
        }
        else if (i == 0 || j == 0) {
            str += "0"
        }
         //---------------------top left triangle
         else if (Math.abs(i) - Math.abs(j) >= 0 && j < 0 && i < 0) {
            str += Math.abs(j)
        }
        //---------------------top right triangle
        else if (j + i >= 0 && j > 0 && i < 0) {
            str += Math.abs(n - j) + 1
        }
        //---------------------bottom left triangle
        else if (i > 0 && j < 0 && i - Math.abs(j) <= 0) {
            str += Math.abs(n + j) + 1
        }
        //---------------------bottom right triangle
        else if (i > 0 && j > 0 && i - j >= 0) {
            str += j
        }
        else if (i < 0 && j > 0&& Math.abs(i)-j < n)
        {
            str += String.fromCharCode(Math.abs(j) + z)
        }
        else if (i < 0 && j < 0 && Math.abs(i)- Math.abs(j) < n)//(i>j)
        {
            str += String.fromCharCode(Math.abs(j+n+1) + z)
        }
        else if (i > 0 && j < 0 && i > Math.abs(j))
        {
            str += String.fromCharCode(Math.abs(j) + z)
        }
        else if (i > 0 && j > 0 && j>i)
        {
            str += String.fromCharCode(n-j+1+z)
        }
        else {
            str += " "
        }
    }
    str += "\n"
}
console.log(str);