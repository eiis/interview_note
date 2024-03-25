function lengthOfLongestSubstring(s: string): number {
  if(s.length <= 1) return s.length;
  let max = 0;
  s.split('').reduce((total,value) => {
      let len = total.indexOf(value);
      if(len === -1){
          total += value;
          max = total.length > max ? total.length : max;
          return total;
      }else{
          total += value;
          return total.slice(len + 1);
      }
  },'');

  return max;
};


console.log(lengthOfLongestSubstring("abcabcbb"));

