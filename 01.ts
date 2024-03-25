function sleep(delay:number):Promise<void>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(),delay)
  })
}

sleep(1000).then(()=>{
  console.log('1s later')
})

export {}
