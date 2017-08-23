const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    // when I have usde all letters, arr is empty now
    if (arr.length === 0) {

      console.log("i am at basecase length 0");
      console.log("this is m " + m);
      result.push(m);
      console.log(result);
      console.log("################################");
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        console.log("arr is " + arr);
        console.log("curr is " + curr);
        let next = curr.splice(i, 1);
        console.log("I am in loop " + i);
        console.log("arr is " + arr);
        console.log("curr is " + curr);
        console.log("next is " + next);
        console.log("m is " + m);
        console.log("m.concat(next) is "+ m.concat(next) );
        permute(curr, m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

console.log(permutator(['a','b','c','d']))
