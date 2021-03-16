var methods = {};

this.output = 1337;
this.input = 2662;

var mck = {};



mck.fun1 = function(){
  console.log('fun1');
}

mck.fun2 = function(){
  console.log('fun2');
}

mck.fun3 = function(){
  console.log('fun3');
}


// methods.updateServer = function(){
//   console.log('important function');
// };
//
// methods.eatCookies = function(){
//   console.log('Chocalate cookies');
// }
//
// methods.node = function(){
//   console.log('NodeJS, is AWESOME');
// }



methods.sumNumbers = function(a,b) {
  output = a+b;
  return output;
}

methods.circleArea = function(radius) {
  output = radius*radius* Math.PI;
  return output;
}

methods.areaOfRectangle = function(a,b) {
  output = a*b;
  return output;
}

exports.data = methods;
exports.mck = mck;
