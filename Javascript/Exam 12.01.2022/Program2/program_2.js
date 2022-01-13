var n = 5;

var str = ""

for (i = -(n + 1); i <= (n + 1); i++) {
    for (j = -(n + 1); j <= (n + 1); j++) {
       
        //---------------------upper and lower lines
        if ((i == -(n+1) || i == (n + 1)) && j <= n && j >= -n || i == 0 && j == 0) {
            str += "0"
        }
        //---------------------left and right lines
        else if ((j == (n + 1) || j == -(n + 1)) && (i > 0 || i <= 0)) {
            str += "o"
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
        else {
            str += " "
        }
    }
    str += "\n"

}
console.log(str);