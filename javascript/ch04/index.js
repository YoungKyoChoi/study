//배열

const num = [1,2,3,4,5];
console.log(typeof num);
console.log(num);
console.log(num[0]);
console.log(num[4]);

num.push(6);
console.log(num);

num.pop();
console.log(num);

num.pop();
console.log(num);

//split
let str = "money:3000";
let arr = str.split(":");
console.log(arr);

let ele =
document.querySelector("#data");
ele.innerHTML = arr[1]+"원 벌었습니다."
