
/**
 * 1 2 3 4 5
 *  3 5 7 9
 *   8 12 16
 *    20 28
 *     48
 * @param arr 
 * @returns 
 */
function generateSumTree(arr:number[]):number{
  if(arr.length === 1)return arr[0]

  let len: number[]= []
  for(let i = 0; i < arr.length - 1; i++){
    len.push(arr[i] + arr[i+1])
  }

  return generateSumTree(len)
}

console.log(generateSumTree([1,2,3,4,5]));
export {}
