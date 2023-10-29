console.log(global);
// global是Node.js中的一个全局对象，它表示全局命名空间。
// 在Node.js中，全局对象用于访问全局变量、模块导入和全局函数。它通常在全局作用域中定义
// 在全局作用域中定义全局变量
let globalVar = 'Hello, global!';

// 在全局作用域中定义全局函数
function globalFunc() {
    console.log('This is a global function.');
}

// 使用全局对象访问全局变量
console.log(globalVar); // 输出: "Hello, global!"

// 使用全局对象导入模块
// const module = require('./my-module');

// 使用全局对象访问全局函数
globalFunc(); // 输出: "This is a global function."
