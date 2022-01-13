var n = 3;
var str = ""


for(i = 0; i <= (n*n)+1; i++)
{
    for(j = -n; j <= n; j++)
    {

        //-----------------------------First Part----------------------
        if (i == 0 && j == 0) {
            str += "0"
        }
        //-----------------------------Second Part----------------------
        else if(i+j == 0 || i>n && i+j == n)
        {
            str += "/"
        }
        else if(i == j || i>n && i-j == n)
        {
            str += "\\"
        }
        //-----------------------------Third Part----------------------
        else if(i <= n && i>= 1 && i-Math.abs(j) <= n && i - Math.abs(j) > 0 || i >= n && i <= n+n && i -Math.abs(j) <= n+n && i-Math.abs(j)>n) 
        {
            str += "-"
        }
        //-----------------------------Fourth Part----------------------
        else if(Math.abs(j) == 1 && i > (n*n)-n && i < (n*n)+1 )
        {
            str += "|"
        }
        //-----------------------------Last Part-------------------------
        else if(i == (n*n)+1 || j==0 && i > (n*n)-n)
        {
            str += "="
        }
        else
        {
            str += " "
        }

    }
    str += "\n"
}
console.log(str);