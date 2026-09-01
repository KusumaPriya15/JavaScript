console.log(4>2); //true
console.log(4>=2); //true
console.log(4<2); //false
console.log(4==2); //false
console.log(4!=2); //true

console.log("3">2); //true

console.log(null>0); //false
console.log(null==0); //false because, this is an equality checker, comparision checkers work differently
console.log(null>=0); //true

//strict check: "===" checks for the datatype too

console.log("2"===2); //false
console.log("2"==2); //true
