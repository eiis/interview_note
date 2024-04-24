// var p = new Promise((res,rej)=>{
//   console.log(1);
// })
// p.then(()=>{
//   console.log(2);
// })
// console.log(3);

let arrayWithDuplicates = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 3, name: 'Doe' },
  { id: 2, name: 'Jane' }
];

// let uniqueArray = Array.from(new Set(arrayWithDuplicates.map(JSON.stringify))).map(JSON.parse);


// let uniqueArray = arrayWithDuplicates.reduce((pre,cur)=>{
//   let found = pre.find(item => item.id === cur.id);
//   if(!found){
//     pre.push(cur);
//   }
//   return pre
// },[])

// console.log(uniqueArray);

console.log(new Set(arrayWithDuplicates.map(item=>JSON.stringify(item))));
console.log(new Set(arrayWithDuplicates));
