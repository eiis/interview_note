// 两个异步函数
function asyncFunction1() {
  return new Promise((resolve, reject) => {
    // 假设这里有一个异步操作
    setTimeout(() => {
      // 异步操作成功
      reject("Async function 1 failed");
    }, 1000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    // 假设这里有一个异步操作，但出现了错误
    setTimeout(() => {
      // 模拟异步操作失败
      resolve("Async function 2 completed");
    }, 2000);
  });
}

// 使用Promise.all处理两个异步函数
Promise.all([asyncFunction1().catch(error => error), asyncFunction2().catch(error => error)])
  .then(results => {
    // 这里的 results 是一个数组，包含了两个异步函数的结果或错误信息
    console.log('results',results); // 输出 ["Async function 1 completed", "Async function 2 failed"]
  }).catch(error => {
    console.log('error',error);
  });

  // Promise.all([asyncFunction1(), asyncFunction2()])
  // .then(results => {
  //   // 这里的 results 是一个数组，包含了两个异步函数的结果或错误信息
  //   console.log('results',results); // 输出 ["Async function 1 completed", "Async function 2 failed"]
  // }).catch(error => {
  //   console.log('error',error);
  // });
