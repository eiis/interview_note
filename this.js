// function foo() {
//   console.log(this); // obj对象
// }

// var obj1 = {
//   name: "obj1",
//   foo: foo
// }

// var obj2 = {
//   name: "obj2",
//   obj1: obj1
// }

// obj2.obj1.foo();

function foo() {
  console.log(this);
}

var obj1 = {
  name: "obj1",
  foo: foo
}

// obj1的foo赋值给bar
var bar = obj1.foo;
bar();
