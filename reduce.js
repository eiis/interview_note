var res = [
  [1, 0],
  [1, 1],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [0, 1]
);
console.log(res);
