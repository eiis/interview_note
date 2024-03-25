var p = new Promise((res,rej)=>{
  console.log(1);
})
p.then(()=>{
  console.log(2);
})
console.log(3);
