var n = 5;
var str = ""

for(i = 0; i < 1; i++)
{
    for(j = -n; j <= 0; j++)
    {
        if(i == 0 && j == 0)
        {
            str += "0"
        }
        else
        {
            str += " "
        }
    }
    str += "\n"
}

for (k = 0; k < n-1; k++) {
    for (i = 1; i <= n; i++) {
        for (j = -n; j <= n; j++) {
            // if (i == 0 && j == 0) {
            //     str += "0"
            // }
            if (i == -j && j < 0) {
                str += "/"
            }
            else if (i == j && j > 0) {
                str += "\\"
            }
            else if (i - Math.abs(j) <= n && i > 0 && i - Math.abs(j) > 0) {
                str += "-"
            }
            else {
                str += " "
            }
        }
        str += "\n"
    }
}
for (i = (n*n)-(n-1) ; i <= (n*n)+1; i++)
{
    for (j = -n; j <= n; j++)
    {
        if(Math.abs(j) == 1 && i > (n*n)-n && i < (n*n)+1 )
        {
            str += "|"
        }
        else if(i == (n*n)+1 || (j==0 && i > (n*n)-n))
        {
            str += "="
        }
        else
        {
            str += " "
        }
        // console.log((i,j));
    }
    // console.log((i,j));
    str += "\n"
}
console.log(str);