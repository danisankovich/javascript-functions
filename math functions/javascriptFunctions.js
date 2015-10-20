Math.permutate = function(str) {
  var permutations = [];
  var arr = [];
  function permHelper(str, arr) {
      if (typeof (str) === 'string') {
        str = str.split('');
      }
      if (str.length === 0) {
        permutations.push(arr.join(''));
      }
      for (var i = 0; i < str.length; i++) {
          var x = str.splice(i, 1);
          arr.push(x);
          permHelper(str, arr);
          arr.pop();
          str.splice(i, 0, x);
      }
  }
  permHelper(str, arr);
  return permutations;
};
// console.log(Math.permutate("yes"));

Math.avg = function(arr) {
  var sum = arr.reduce(function(a, b){
    return a + b;
  });
  return sum/(arr.length);
};
// console.log(Math.avg([1, 2, 3, 4, 5]));

Math.median = function(arr) {
  arr.sort(function(a, b){
    return a-b;
  });
  if (arr.length % 2 === 1) {
    var arrMedian = arr[(arr.length / 2) - 0.5];
  }
  if(arr.length % 2 === 0) {
    var arrMedian = (arr[arr.length / 2 ] + arr[(arr.length / 2) -1])/2;
  }
  return arrMedian;
};
// console.log(Math.median([1, 5, 3, 9, 7, 8, 10, 22]));

function deepCloneObj(obj) {
  var newObj = {};
  for(key in obj) {
    if (typeof obj[key] === 'object') {
      newObj[key] = deepCloneObj(obj[key]);
    }
    else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// console.log(deepCloneObj(obj));
