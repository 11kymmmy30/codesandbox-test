// /**
//  * const、let等の変数宣言
//  */
// const val4 = {
//   name: "nao",
//   age: 27
// };

// // constで定義したオブジェクトは変更可能
// val4.age = 28;
// val4.address = "Gifu";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("horse");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "nao";
// const age = 27;

// // テンプレート文字列を用いた方法
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// /**
//  * アロー関数の書き方
//  */
// // func1とfunc2は同じ
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // 処理が一行の時は括弧内が省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "nao",
//   age: 27
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["nao", 27];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1); // 出力結果：[1, 2]
// console.log(...arr1); // 出力結果：1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); // 出力結果：3
// sumFunc(...arr1); // 出力結果：3

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);  // 出力結果：3, 4, 5

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// この方法では参照渡しとなるので、arr4の値も変わってしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4[0]);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "nao"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
// 出力結果：1行目=田中、2行目=山田、3行目＝nao
// mapでindexを使いたいときは引数として指定

// 奇数だけ抽出する関数
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// nao以外は敬称をつけて返す
// const newNameArr = nameArr.map((name) => {
//   if (name === "nao") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;

// // toLocaleString関数は3桁ごとにカンマを入れてくれる関数
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 50));

/**
 * 論理演算子の本当の意味
 */
// 「||」は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee); // 「金額未設定です」が出力される

// 「&&」は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2); // nullが出力される
// const num3 = 100;
// const fee3 = num3 && "何か設定されました";
// console.log(fee3); // 「何か設定されました」が出力される
