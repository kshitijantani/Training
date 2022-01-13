let arrayList = [
    ["1","2","3","4","5"],
    ["Python", "Java", "Html", "Go","Php"]
]


for ( let i=0; i < arrayList.length; i++)
{
    for ( let j=0; j < arrayList[i].length; j++)
    {
        console.log("Index:" + i,j, "Element: " + arrayList[i][j]);
       
    }
}

