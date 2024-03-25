function transform(obj:{[key:string]:string},orderList:string[]):number[]{
  return orderList.map(item=>Number(obj[item]))
}


const obj ={
  'a':'1',
  'b':'2',
  'c':'3',
  'd':'4',
}

console.log(transform(obj,['a','b','c']));
console.log(transform(obj,['a','b','d']));
