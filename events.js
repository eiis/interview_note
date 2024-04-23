class events{
  constructor(){
    this.listeners={}
  }

  on(type,cb){
    if(!this.listeners[type]) this.listeners[type]=[]
    this.listeners[type].push(cb)
  }

  emit(type,...args){
    if(this.listeners[type]){
      this.listeners[type].forEach((cb)=>{
        cb(...args)
      })
    }
  }
}

const ee = new events();
ee.on("设计模式", (price) => {
  console.log(`HearLing订阅设计模式这本书的价格是:${price}`);
})

ee.emit("设计模式", 100)
