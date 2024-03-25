// array || obj
function cleanObject(obj:any):any{
  if(Array.isArray(obj)){
    return obj.map(value => cleanObject(value)).filter(Boolean)
  }else if(typeof obj === 'object' && obj !== null){
    const newObj:{[key:string]:any} = {}

    Object.keys(obj).forEach(item =>{
      if(Boolean(obj[item])){
        newObj[item] = cleanObject(obj[item])
      }
    })
    return newObj
  }
  return obj
}

// 示例用法
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: '',
  f: 'hello',
  g: [false, true, ['nested', 0]],
  h: { i: false, j: 'nested' },
};

console.log(obj instanceof Object);


const obj1 = [null,0,false, [false, true, ['nested', 0]]]
console.log(obj1 instanceof Array);

const obj2 = {
  "a":null,
  "b":[false,1]
}

console.log(cleanObject(obj));
console.log(cleanObject(obj1));
console.log(cleanObject(obj2));

export{}
