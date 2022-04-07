/*
function likes(names) {
  if (names.length === 0)
    return "no one likes this";
  if (names.length === 1)
    return `${names[0]} likes this`;
  if (names.length === 2)
    return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[1]} like this`;
  if (names.length >= 4)
    return `${names[0]}, ${names[1]} and ${names.length-2} like this`;
}
*/

function likes (names) {
  const templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  const idx = Math.min(names.length, 4);

  const result = templates[idx].replace(/{name}|{n}/g, val => {
    return val === '{name}' ? names.shift() : names.length;
  });

  console.log(result);
  return result;
}

likes(['Alex', 'Jacob', 'Mark', 'Max']);