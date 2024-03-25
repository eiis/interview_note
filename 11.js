function mask(str, char = '*') {
  /* 代码实现 */
  //小于4
  if(str.length<=4){
    return char.repeat(str.length)
  }
  
  // 大于4 向下floor
  //partLength表示需要在字符串开头和结尾进行掩码处理的字符数量
  const partLength = Math.floor((str.length - 4) / 2);
  // console.log(partLength);
  //末尾放几个
  const endLength = str.length % 2 === 0 ? partLength : partLength + 1;
  console.log(endLength);

  const start = str.substring(0, partLength);
  const end = str.substring(str.length - endLength);

  return start + char.repeat(4) + end;
}
// console.log(mask('alibaba', '#'));
console.log(mask('85022088'));
// console.log(mask('hello'));
// console.log(mask('abc', '?'));
// console.log(mask('阿里巴巴集团', '?'));
