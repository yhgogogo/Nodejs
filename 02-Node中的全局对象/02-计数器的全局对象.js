//计时器的全局对象
setTimeout(()=>{
    console.log(setTimeout)
},3000);
 // setInterval 是一个全局函数，用于在指定的时间间隔内重复执行代码。
// setInterval(()=>{
//     console.log(setInterval)
// }1000);
// setImmediate 是 JavaScript 提供的全局函数，
// 用于在下一轮事件循环中执行代码。它通常用于处理异步操作，例如等待异步回调函数的执行。
setImmediate(()=>{
    console.log(setImmediate)
});
// process.nextTick 是一个 Node.js 提供的全局函数，
// 用于延迟执行代码的执行，直到下一轮事件循环。它通常用于处理异步操作，例如等待异步回调函数的执行。
// process.nextTick(()=>{
//     console.log(process.nextTick)
// })

