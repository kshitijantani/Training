// var n = 4;

// var str = ""
// for (let i = -n; i <= n; i++)
// {
//     if(i == 0)
//     {continue}
//     for (j = -n; j <= n; j++)
//     {
//         if(j == 0)
//         {continue}
//         if((Math.abs(i) + Math.abs(j) <= n+1) && (Math.sign(i) == Math.sign(j)))
//         {
//             // console.log(i,j,i-Math.abs(j))
//             str += "0"
//         }
//         else{
//             str += " "
//         }
//     }
//     str += "\n"
// }
// console.log(str);

// -------------------------------Daimond Pattern-----------------------------

var n = 4;

var str = ""
for (let i = -n; i <= n; i++)
{
    if(i == 0)
    {continue}
    for (j = -n; j <= n; j++)
    {
        if(j == 0)
        {continue}
        if(Math.abs(i) + Math.abs(j) <= n+1 )
        {
            // console.log(i,j,i-Math.abs(j))
            str += "@"
        }
        else{
            str += "-"
        }
    }
    str += "\n"
}
console.log(str);

