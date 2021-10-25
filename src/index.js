// const let 等の変数宣言
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ookusu",
//   age: 20
// };
// val4.name = "おおくす";
// val4.addres = "愛知";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//テンプレート文字列
// const name = "ookusu";
// const age = 20;
// //「私の名前はookusuです。年齢は２０歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数
//従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

//分割代入
// const myProfile = {
//   name: "ookusu",
//   age: 20
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["ookusu", 20];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//デフォルト値、引数など
// const seyHello = (name = "ゲスト") =>
//   console.log(`おはようございます。${name}さん！`);
// // seyHello("ookusu");
// seyHello();

//スプレット構文
// //配列の展開
// const arry1 = [1, 2];
// // console.log(arry1);
// // console.log(...arry1);

// const sumFunc = (m, n) => console.log(m + n);
// // sumFunc(arry1[0], arry1[1]);
// sumFunc(...arry1);

//まとめる
// const arry2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arry3] = arry2;
// console.log(num1);
// console.log(num2);
// console.log(arry3);

//配列のコピー、結合
// const arry4 = [10, 20];
// const arry5 = [30, 40];

// const arry6 = [...arry4]; //イコールコピーだと参照元にも影響が出る
// console.log(arry6);

// const arry7 = [...arry4, ...arry5];
// console.log(arry7);

//mapやfilterを使った配列の処理
const nameArry = ["田中", "山田", "大楠"];
// for (let i = 0; i < nameArry.length; i++) {
//   console.log(nameArry[i]);
// }

// const nameArry2 = nameArry.map((name) => {
//   return name;
// });
// console.log(nameArry2);

// nameArry.map((name, i) => {
//   console.log(`${i + 1}番目は、${name}です。`);
// });

// const numArry = [1, 2, 3, 4, 5];
// const newNumArry = numArry.filter((num) => {
//   return num % 2 !== 0;
// });
// console.log(newNumArry);
