// task 1
// const arry = [95, 80, 70, 99, 67, 56];
// let totalNum = 0;

// for (let val of arry) {
//   totalNum += val;
// }

// console.log(`average ${totalNum / arry.length}`);

// task 2
// store value after discount 10 %
// let arry = [900, 300, 567, 230];
// console.log("initial", arry);

// for (let i = 0; i < arry.length; i++) {
//   let discount = arry[i] / 10;
//   arry[i] -= discount;
// }
// console.log("final", arry);


// task 3 

let arr = ["google", "amazone","netflix","devsinc"]
console.log("initial",arr)
arr.shift()
console.log("first element remove",arr)
arr.push("netsol")
console.log("add element at end",arr)
arr[2] = "tekxel"
// or 
arr.splice(2,1,"tekxel")
console.log("replace",arr)
