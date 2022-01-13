var category = [
    "movie", 
    "news", 
    "eductaion", 
    "sports ", 
    "politics"]

var age = [
    "teenager",
    "adult"
]

const final = []

for (i = 0; i < 100; i++)
{
    ag = age[Math.floor(Math.random() * age.length)];
    cate = category[Math.floor(Math.random() * category.length)];
    visit = Math.floor(Math.random()*100);

    var answer = {age: ag, category: cate, visitor: visit }
    console.log(answer);

}
