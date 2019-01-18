const firstName = "gildong";
// const 변하지 않는수 
// 커멜표기법 두단어를 겹칠경우 앞에껀 대문자로한다
const lastName = "Hong";

console.log(firstName);

console.log(lastName);

console.log(lastName+" "+firstName);

const fullName = lastName+" "+firstName;

console.log(fullName);
// + 연산자로 두개를 결합할수있다
// 대문자 소문자

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

//toUppercase 소문자를 다 대문자로 tolowercase 대문자를 다 소문자로

const sendMoney = "money,10000,recever,jooho,sender,cos";
console.log(sendMoney);

console.log(sendMoney.split(","));

const data = console.log(sendMoney.split(","));

console.log(data);
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);
console.log(data[5]);

console.log(1+"2");
