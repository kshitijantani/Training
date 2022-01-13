var n = 5;

var str = ""
for (let i = 0; i < n; i++) 
{
    for (j = -n; j < n; j++) 
    {
        if((i-Math.abs(j)) >= 0)
        {
            // console.log(i,j,i-Math.abs(j))
            str += i-Math.abs(j) + 1
        }
        else{
            str += " "
        }
    }
    str += "\n"
}
console.log(str);