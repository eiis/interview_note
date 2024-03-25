/**
 * 
 * @param v1 
 * @param v2 
 * @returns 
 */
function compareVersion(v1:string,v2:string):number{
  const arr1 = v1.split('.').map(Number)
  const arr2 = v2.split('.').map(Number)

  const len = Math.max(arr1.length,arr2.length)
  for(let i=0;i < len;i++){
    const num1 = i < arr1.length ? arr1[i] : 0;
    const num2 = i < arr2.length ? arr2[i] : 0;

    if(num1 < num2)return -1
    if(num1 > num2)return 1
  }
  return 0
}
console.log(compareVersion('1.1.2','1.1.1'));

export {}
