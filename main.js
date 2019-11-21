const reader = require('readline-sync');
const number= reader.questionInt("please enter number");
const convert= require("./converter.js");
console.log(convert.convertToBinary(number));
console.log(convert.convertToHexa(number));