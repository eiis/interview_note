function Person(name) {
  this.name = name;
  this.age = 18;
  this.sayName = function() {
      console.log(this.name);
  }
}
// 第二步 创建实例
var person = new Person('person')

console.log(person.__proto__ === Person.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);
