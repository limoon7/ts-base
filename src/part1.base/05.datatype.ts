// NOTE: 原始类型
// 大写的Boolean 和小写的boolean 的区别？
let bool: boolean = true;
let num: number | undefined | null | string;
let str: string = "abc";

// bool = false
// num = 'abc'
// str = 123

console.log("原始类型", { bool, num, str });

// NOTE: 数组
let arr1: number[] = [1, 2, 3];
let arr2: (number | string)[] = [1, 2, 3, "4"];
let arr3: Array<number> = [1, 2, 3];

// arr1.push('11111');
arr1.push(1123);
console.log("数组", { arr1, arr2, arr3 });

// NOTE: 元组
let tuple: [number, string] = [0, "1"];
// let tuple: [number, string] = ['0', "1"];
tuple.push(27576);
// tuple.push(true);

console.log("元组", { tuple });

// 越界访问
// console.log("元组", { tuple, tuple2: tuple[2] });

// NOTE: 函数

let addaaaa1 = (x: number, y: number): number => x + y;
// 0. 推断类型
let addaaaa = (x: number, y: number) => x + y;

console.log("addaaaa", addaaaa(1, 2));

// 1. 可选参数

function buildName(firstName: string, lastName?: string) {
  console.log("buildName -> firstName", firstName, lastName);
}
// 2. 默认参数
// 没有传参值为默认参数，有的话为传入的
function buildName1(firstName: string, lastName = "Smith") {
  console.log("默认参数>buildName -> firstName", firstName, lastName);
}
// 3. 剩余参数

buildName1("Joseph", "");

function buildName2(firstName: string, ...restOfName: string[]) {
  console.log("restOfName", restOfName);
  console.log("buildName2", firstName + " " + restOfName.join(" "));
}

let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

// 4. 函数重载

let suits = ["hearts", "spades", "clubs", "diamonds"];

// 前两个为重载
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: string | number | any[]): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card-Object: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card-Number: " + pickedCard2.card + " of " + pickedCard2.suit);

// NOTE:对象

let obje: { x: number; y: number } = { x: 1, y: 2 };
obje.x = 3;

console.log("functionpickCard -> obje", obje);

// NOTE: symbol

let s1: symbol = Symbol();
let s2 = Symbol();
console.log("symbol", s1 === s2);

// NOTE: undefined, null
let un: undefined = undefined;
let nu: null = null;

let num1 = 1;

num1 = un;
num1 = undefined;
num1 = 1;

console.log("undefined-null -> num", num1);

// NOTE: void
let noReturn = () => {};

// NOTE: any
let xabc;
xabc = 1;
xabc = [];
xabc = () => {};

// NOTE: never
// 这里的never指的是会抛出、返回错误或者无限循环
let error = () => {
  throw new Error("error");
};

// 返回never的函数必须存在无法达到的终点
// while 循环会一直循环代码块，只要指定的条件为 true。
let endless = () => {
  while (true) {}
};

// NOTE: Any
let xabcb: any;
xabcb = 1;
xabc = [];
xabcb = () => {};
