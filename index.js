// for(let i = 0; i<=10;i++){
// console.log(i)
// }

// let number = 5;

// while(number<=10){

//     console.log(number);
//     ++number;
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 15 === 0) {
//         console.log(i, "FizzBuzz")
//     }
//     else if (i % 3 === 0) {
//         console.log(i, "Fizz")
//     }
//     else if (i % 5 === 0) {
//         console.log(i, "Buzz")
//     }

//     else {
//         console.log(i)
//     }

// }

// for(let i = 0; i<=4;i++){
//     for(let j = 0; j<=4;j++) {
//         console.log(i,j);
//     }

// }

// let x = 1;

// while(true){
//     ++x
//     if(x%2!==0){
//         continue
//     }
//     else if(x<=101){
//         break
//     }

// }

// outerLoop:for(let i = 0; i<=4;i++){
//     for(let j = 0; j<=4;j++) {

//         if(j%2===0 )
//         continue outerLoop;
//         console.log(i,j);

//     }

// }

// let limit = 0;
// let limit1 = 2;

// outerLoop:for(let n = 0; n<=4;n++){
//     for(let m = 0; m<=4;m++) {
// // limit+=1;
// //         // console.log(n,m);
// //         console.log(limit)

//         if(limit>0){
//             --limit;console.log(n,m);
//         }

//     }

// }

// alert("Zaregistriruytes!!!");
// let login_1 = prompt("Vvedite login: ");
// let password_1 = prompt("Vvedite parol: ");

// alert("Avtoriziruytes!");

// let login2 = prompt("Vvedite login: ");
// let password2 = prompt("Vvedite parol: ");

// while (true) {
//     if (login_1 === login2 && password_1 === password2) {
//         alert("Vse okey!")
//         break;
//     }
//     // else if(login!==login1 && password===password2)
//     // {
//     //     alert("Neverniy login!")
//     // }
//     // else if(login_1!==login2 && password_1!==password2)
//     // {
//     //     alert("Neverniy parol!");
//     //     continue;
//     // }
//     else {
//         alert("Neverniy parol i login!");

//         login2 = prompt("Vvedite login: ");
//         password2 = prompt("Vvedite parol: ");

//     }

// }

// const p = true;
// const n = false;
// const m = false;

// if(p===true || n===true || m===true )
// {
//     console.log("Vixodi pogulay")
// }
// else{
//     console.log("Sidi doma")
// }

console.clear();

// const student = {
//   name: 'leila',
//   surname: 'guliyeva',
//   age: '17',
// }

// while (1) {
//   const ques = prompt('Enter the obj field');
//   if (ques in student) console.log(true);
//   else {

//     const q = confirm("Do you want to add new field")
//     if (q === true) {
//       const qu = prompt('Enter the obj field');
//       student[ques] = qu;
//     }
//     else {
//       console.log(ques)
//     }
//   }

// }

// const arr = [1, 2, 3];
// const arr2 = [];

// const start = 1;
// const end = 3;

// for (let i = start, j = 0; i < end; i++, j++) {
//   arr2[j] = arr[i];
// }
// console.log(arr2);

// const obj = {
//   name: "Alex",
//   surname: "Max",
//   age: 25,
//   birth: {
//     day: 10,
//     month: 10,
//     year: 2023,
//   },
// };

// const keys = Object.keys(obj);

// for (let i = 0; i < keys.length; i++) {
//   console.log(keys[i] +':' + ' ' + obj[keys[i]]);
// }

// console.clear();

// const arr = [1, 2, 3, (4)[(5, 6)]];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// // }

// for (const num of arr) {
//   if (typeof arr !== "object"){
//    console.log(num, arr[num]);
//   continue;}
//   for (const inner in arr[num]){
//     console.log(num, arr[num][inner]);
//   }
// }

// const str = '1234567890';
//  const arrstr =str.split('')
// for(let i = 0; i < arrstr.length; i++){
//   // console.log(str[i]);
//   if(arrstr[i]%2===0){

//     arrstr[i] = 's'

//   }
// }

// const

// const date = new Date();
// date.setFullYear(1999);
// date.setMonth(9);
// date.setDate(16);
// date.setHours(15);
// date.setMinutes(32);
// date.setSeconds(45);
// date.setMilliseconds(764);
// const msFrom1970 = date.getTime();
// const year = date.getFullYear();
// const month = date.getMonth();
// const monthDay = date.getDate();
// const weekDay = date.getDay();
// const hours = date.getHours();
// const minuts = date.getMinutes();
// const seconds = date.getSeconds();
// const ms = date.getMilliseconds();
// const tz = date.getTimezoneOffset();

// console.table({
//   date,
//   year,
//   month,
//   monthDay,
//   weekDay,
//   hours,
//   minuts,
//   seconds,
//   ms,
//   tz,
//   msFrom1970,
// });

// const date = new Date("1999-10-16T15:32:45.764Z");

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString);
// console.log(date.toTimeString());
// console.log(date.toString());
// console.log(date.toUTCString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// const datestring = date.toISOString();
// const datetime = datestring.split("T");
// const dateo = datetime[0];
// const datep = dateo.split("-");

// const year = datep[0];
// const month = datep[1];
// const day = datep[2];
// console.log(day, month, year);

// const message = 'Welcome';

// function log(){
//     const message = 'Welcome';
//     console.log(message)
// }

// log()

// function sum(num1, num2, num3) {
//   if (num1 === undefined) {
//     console.log(0);
//   } else if (num2 === undefined) {
//     console.log(num1);
//   } else if (num3 === undefined) {
//     console.log(num1 + num2);
//   } else {
//     console.log(num1 + num2 + num3);
//   }
// }

// sum(1);

// function rectang(a = 0, b = a) {
//   console.log(a * b);
// }

// rectang(3, 4);

// function log() {
//   console.log(...arguments);
// }

// function factorial(num1, num2) {
//   let res = [1, 1];
//   const bignumber = num1 > num2;
//   const numb1 = bignumber ? num1 : num2;
//   const numb2 = bignumber ? num2 : num1;

//   let element = 1;

//   for (i = 1; i <= numb1; i++) {
//     element *= i;
//     if (i === numb2) {
//       if (bignumber) {
//         res[1] = element;
//       } else{ res[0] = element;}
//     }
//   }

//   if (bignumber) {res[0] = element;}
//   else{res[1] = element;}
//   return res;
// }

// log(factorial(5, 9));

// const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5];

// const count = {};
// let elem
// // for (const num of arr) {
// //   const isNumExist = uniqNumb.includes(num);
// //   if (!isNumExist) {
// //     uniqNumb.push(num);

// //   }

// // }

// for(let i = 0;i<arr.length;i++ ){
//   elem = arr[i]

//   if(count[elem]){
//     count[elem]+=1;
//   }
//   else{
//     count[elem] = 1
//   }
// }
// console.log(count);

// function factorial(num1, num2) {
//   let res;
//   const bignumber = num1 > num2;
//   const numb1 = bignumber ? num1 : num2;
//   const numb2 = bignumber ? num2 : num1;

//   let element = 1;

//   for (i = 1; i <= numb1; i++) {
//     element *= i;
//     if (i === numb2) {
//       if (bignumber) {
//         res = element;
//       } else{ res = element;}
//     }
//   }

//   if (bignumber) {res = element;}
//   else{res= element;}
//   return res;
// }

// log(factorial(5, 9));

// function log() {
//   console.log(...arguments);
// }

// function timer(ms,message){
// }

// timer(1000,'one')

// function log(message) {
//   console.log(message);
// }

// function timer(ms, message) {
//   let msg = `from timer: ${message}`
//   setInterval(log, ms, msg);

// }

// timer( 10,'one')
// timer( 10,'one')
// timer( 10,'one')

// function sum() {
//   let res = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     res += arguments[i];
//   }
//   return res;
// }
// console.log(sum(1, 3));

// function sum(num) {
//   if (num === 0) {
//     return 0;
//   }
//   return num + sum(num - 1);
// }

// console.log(sum(5));

// function createStudet(name,age,group) {
//   return{name,age,group}
// }

// console.log(createStudet('Novruz',25,233))

// function Mymath(operation,...nums){
//   switch(operation){
//     case 'sum':{
//         sum = 0;
//         for (let i = 0; i <= nums.length; i++)
//         sum = sum + i;

//     }
//   }
// }
// const sum = Mymath(1,2,3,4)

// function MyArray(...args) {
//   this.elements = {
//     length: 0,
//   };
//   for(const arg of args){
//     const index = this.elements.length;
//     this.elements[index]

//   }

//   // Пример использования

// }
//   function Push(arr, element) {
//     arr[arr.length] = element;
//     return arr.length;
//   }
// const arr = new MyArray(1,2,3,4)
// Push(arr, 6);
// console.log(arr);
// console.log(arr.elements);

// function Rect(width, height) {

//   const _width = width;

//   const _height = height;

//   this.square = function() {

//       return _width * _height;

//   }

// }

// Rect.prototype.perimeter = function() {

//   return (this.width + this.height) * 2; // FIX

// }

// function Square(side) {

//   Rect.call(this, side, side);

//   const _square = this.square();

//   this.square = function() {

//       console.log('I calculated square of square');

//       return _square;

//   }

// }

// Object.setPrototypeOf(Square.prototype, Rect.prototype);

// const rect = new Rect(2, 3);

// const square = new Square(5);

// console.log(rect.square());
// console.log(square.square());
// console.log(square.perimeter());



function log(){
 if(!log.check){
  log.check = { key: 'value' };
 }
  return log.check;
}
const s1 = log();

const s2 = log();


console.log(s1 === s2);

