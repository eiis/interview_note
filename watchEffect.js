const obj={
  a:1,
  b:2,
  c:{
    d:3,
    e:5
  }
}
let activeEffct =null
function watchEffect(fn){
  activeEffct = fn
  fn()
  activeEffct = null
}

const effects=[]
const proxy=new Proxy(obj,{
  get(target,key){
    // console.log(key,'收集依赖');
    if(activeEffct){
      effects.push(activeEffct)
    }
    return target[key]
  },
  set(target,key,value){
    if(target[key] !== value){
      // console.log(key,'修改');
      target[key] = value
      effects.forEach(effect => effect())
    }
  }
})


let clicked=false
watchEffect(()=>{
  console.log('触发effect',proxy.a);
})


setTimeout(() => {
  proxy.a=3
}, 2000);
