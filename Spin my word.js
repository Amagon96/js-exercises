/*
function spinWords(string){
  const array = string.split(" ");
  const newArray = [];
  array.forEach( (x, index) => {
    newArray.push([...x].reverse().join(''));
  })
  console.log(newArray);
  //console.log([...string].reverse().join(''));
}
*/

function spinWords(string){
  const result = string.split(" ").map(word => (word.length > 4) ? [...word].reverse().join('') : word)
  .join(' ');
  console.log(`result: ${result}`);
  return result;
}

spinWords("Hey fellow warriors");

