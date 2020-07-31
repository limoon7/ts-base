// NOTE: 接口跳过类型检查
// 1. 在外面声明变量 result ,然后把 result 传入 render 函数，避免传入对象字面量
// 2. 使用类型断言
// 3. 用字符串索引签名

// NOTE: 简单的接口实现
interface List {
  readonly id: number; // 只读
  name: string; // 确定
  age?: number; // 可选
  // [x: string]: string; // 任意
  [x: string]: any; // 任意
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach((value) => {
    console.log("result: id,name", { id: value.id, name: value.name });
    if (value.age) {
      console.log("result: age", { age: value.age });
    }
    // 只读属性不可进行操作
    // value.id++
  });
}
// 数据结构描述
// 赋值的时候，变量的形状必须和接口的形状保持一致。
let result = {
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B", age: 10, abs: true },
  ],
};

// result.data[0].id=2

render(result);

// NOTE: 接口继承
interface ShapeA {
  color: string;
}

interface Square1 extends ShapeA {
  sideLength: number;
}

// NOTE: 字符串索引，数字索引
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["a", "b"];
console.log("chars", chars);

// 混用时，数字索引签名的返回值必须是字符串索引签名返回值的子类型
interface Names {
  [x: string]: any;
  // y: number;
  [z: number]: number;
}

// NOTE: 类型断言
// let square = {};
// let square = <Square1>{};
let square = {} as Square1;
// let square: Square1 = { color: "blue", sideLength: 10 };
square.color = "blue";
square.sideLength = 10;
console.log("square", square);

// NOTE: 函数类型
type Add = (x: number, y: number) => number;
let addM: Add = (a, b) => a + b;
//  普通函数
// let addM = (a: number, b: number) => a + b;
// let addM = (a, b) => a + b;

// NOTE: 混合接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib = (() => {}) as Lib;
  lib.version = "1.0.0";
  lib.doSomething = () => {};
  return lib;
}
let lib1 = getLib();
lib1();
let lib2 = getLib();
lib2.doSomething();

// NOTE: 关于interface和type

interface addd {
  a: string;
}
interface addd {
  b: string;
}

type adddd = {
  b: string;
};

// type adddd = {
//   a: string;
// }

// 关于type的用法

// type 用于基本类型

// primitive
type Name = string;

// object
type PartialPointX = { x: number };
type PartialPointY = { y: number };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// dom
let div = document.createElement("div");
type BBB = typeof div;

// type 映射
type Keys = "firstname" | "surname";

type DudeType = {
  [key in Keys]: string;
};

const testBBB: DudeType = {
  firstname: "Pawel",
  surname: "Grzybek",
};

// 报错
// interface DudeType2 {
//  [key in keys]: string
// }

type Words = "a" | "b" | "c";

type W<T> = T extends Words ? true : false;
