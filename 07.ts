
//const names = ["Mary","John","Emma"] 
// const heights = [170,165,180]
//output 
// ["John", "Mary", "Emma"]


interface people{
  name:string,
  height:number
}

//
function sortPeople(names:string[],heights:number[]):string[]{
  const arr:people[] = names.map((item,index)=>{
    return {
      name:item,
      height:heights[index]
    }
  })

  arr.sort((a,b)=>a.height-b.height)
  return arr.map(item=>item.name)
}

const names = ["Mary","John","Emma"] 
const heights = [170,165,180]
console.log(sortPeople(names,heights));

