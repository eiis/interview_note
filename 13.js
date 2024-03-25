function countedNames(names){
  return names.reduce((acc, name) => {
    if (name in acc) {
      acc[name]++;
    } else {
      acc[name] = 1;
    }
    return acc;
  }, {});
}
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob', 'Bob'];
const countNames = countedNames(names);
console.log(countNames);
