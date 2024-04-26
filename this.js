// // function foo() {
// //   console.log(this); // obj对象
// // }

// // var obj1 = {
// //   name: "obj1",
// //   foo: foo
// // }

// // var obj2 = {
// //   name: "obj2",
// //   obj1: obj1
// // }

// // obj2.obj1.foo();

// function foo() {
//   console.log(this);
// }

// var obj1 = {
//   name: "obj1",
//   foo: foo
// }

// // obj1的foo赋值给bar
// var bar = obj1.foo;
// bar();


// function fn(){
//   console.log(this);
// }

// const obj ={
//   name:'coder',
//   fn
// }
// fn() //global
// obj.fn()  //obj
// var o = obj.fn
// o() //global
// const f=()=>{
//   console.log(this);
// }
// f()
// fn.apply(obj)



function foo(func){
  func()
}

var obj ={
  name:'t',
  bar:function(){
    console.log(this)
  }
}
foo(obj.bar)
