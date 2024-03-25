
// 1-4
let arr = [1,2,3,4]
let newarr = arr.map(String)
console.log(newarr);

// '1'-'4'
let arr2 = ['1','2', '3', '4']
let newarr2 = arr.map(Number)
console.log(newarr2);


// false - true
let arr3 = [false, true, false, true, 0, 1, '1']
console.log(arr3.filter(Boolean));
