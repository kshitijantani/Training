let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let letterArray = ['a', 'b', 'c', 'd', 'e']

let c = []
d = []


for (i = 0; i < 10; i++) {

      a = numberArray[Math.floor(Math.random() * numberArray.length)]
      b = letterArray[Math.floor(Math.random() * letterArray.length)]
      c = [numberArray[Math.floor(Math.random() * numberArray.length)],
      letterArray[Math.floor(Math.random() * letterArray.length)]]

      ans = c[Math.floor(Math.random() * 2)]
  
      d = [a,b,ans]
      let newArray = []
      
      while (d.length > 0) {

            var index = parseInt(Math.random() * d.length)
            var value = d[index]
          
            d.splice(index, 1)
            newArray.push(value);
      }
      console.log(newArray);

}
