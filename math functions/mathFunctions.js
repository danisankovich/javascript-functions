Math.permutate = function(str) { //find all possible combinations of a given string.
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

Math.avg = function(arr) {  //find the average value of a given array.
  var sum = arr.reduce(function(a, b){
    return a + b;
  });
  return sum/(arr.length);
};
// console.log(Math.avg([1, 2, 3, 4, 5]));

Math.median = function(arr) {  //find the median of a given array
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

function deepCloneObj(obj) { //clone an object, no matter how many nested objects lie within.
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

// var array =[1, 2, 3, 5, [1, 2, [4]]];
Math.flattenArray = function(arr) { //flatten an array, no matter how deep
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArray = newArray.concat(Math.flattenArray(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
// console.log(Math.flattenArray(array));

// var array =[1, 2, 3, 5, [1, 2, [4]]];
Math.deepArraySum = function(arr) { //sum all values of an array, no matter how nested
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArray = newArray.concat(Math.deepArraySum(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }
  var sum = newArray.reduce(function(a, b) {
    return a + b;
  });
  return sum;
};
// console.log(Math.deepArraySum(array));

// var array =[1, 2, 3, 5, [1, 2, [4]]];
Math.deepArrayProduct = function(arr) { //multiply all values of an array, no matter how nested
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArray = newArray.concat(Math.deepArrayProduct(arr[i]));
    } else {
      newArray.push(arr[i]);
    }
  }
  var product = newArray.reduce(function(a, b) {
    return a * b;
  });
  return product;
};
// console.log(Math.deepArrayProduct(array));

// var number = 4;
Math.factorial = function(num) {
  if (num < 0) {
    return undefined;
  }
  if (num === 0) {
    return 1;
  }
  return num * Math.factorial(num - 1);
};
// console.log(Math.factorial(number));

// var array =[1, 2, 3, 5, [1, 2, [4]]];
Math.allEven = function(arr) { //find and retrn all even values of an array, no matter how nested
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArray = newArray.concat(Math.allEven(arr[i]));
    } else {
      if (arr[i]%2 ===0) {
        newArray.push(arr[i]);
      }
    }
  }
  return newArray;
};
// console.log(Math.allEven(array));

var array =[1, 2, 3, 5, [1, 2, [4]]];
Math.allOdd = function(arr) { //find and return all odd values of an array, no matter how nested
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArray = newArray.concat(Math.allOdd(arr[i]));
    } else {
      if (arr[i]%2 !==0) {
        newArray.push(arr[i]);
      }
    }
  }
  return newArray;
};
// console.log(Math.allOdd(array));

Math.isPrime = function(num) { //determine if a given number is prime. 0 and 1 return as neither prime nor composite.
  var divisor = 2;
  if (num === 0 || num === 1) {
    return num + " is neither a prime, nor a composite number";
  }
  while (num > divisor) {
    if (num % divisor === 0) {
      return false;
    }
    else {
      divisor ++;
    }
  }
  return true;
};
// console.log(Math.isPrime(2));

Math.fibonacci = function(num) { //fibonacci it up
  if(num<=1) { return num; }
  else { return Math.fibonacci(num-1) + Math.fibonacci(num-2); }
};
// console.log(Math.fibonacci(4));

Math.GCD = function(num1, num2) {  //find greatest common divisor between two numbers
   if(num1 === 0) { return num2; }
   if(num2 === 0) { return num1; }
   else { return Math.GCD(num2, num1 % num2); }
};
// console.log(Math.GCD(0, 15));

Math.farenheit = function(temp) { //convert from celsius to farenheit
  return (temp *(9/5)) + 32;
};
// console.log(Math.farenheit(20));

Math.celsius = function(temp) { //convert from farenheit to celsius
  return (temp -32)*(5/9);
};
// console.log(Math.celsius(212));

Math.inches = function(cm) { //convert from centimeters to inches
  return (cm * 0.39370);
};
// console.log(Math.inches(20));

Math.centimeters = function(inch) { //convert from inches to centimeters
  return (inch/0.39370);
};
// console.log(Math.centimeters(7.874));
