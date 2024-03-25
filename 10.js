

function bar(){
  let a = 2
  return function(){
    console.log('b', a)
  }
}

const foo =bar()
foo()
