console.log(1);
setTimeout(() => {
  console.log(2)
}, 0);

async function async2() {
  console.log(3);
}

new Promise((resolve,reject)=>{
  console.log(4);
  resolve();
}).then(async2);
