// console.log(null+1);
// console.log(undefined+1);

// console.log(isNaN(1) && typeof 1 === "number");

// const arr = [1,2,3]
// for(let key of arr){
//   console.log(key);
// }

// const p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// })
// .then(result => result)
// .catch(e => e);

// const p2 = new Promise((resolve, reject) => {
//   throw new Error('报错了');
// })
// .then(result => result)
// .catch(e => e);

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(e => console.log(e));

function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() { // displayName() 是内部函数，一个闭包
      console.log(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();
