// 泛型

// 基本实现及使用方式
function log<T>(value: T): T {
  console.log("泛型基本实现", value);
  return value;
}
log<string[]>(["a", ",b", "c"]);
log(["a", ",b", "c"]);
log([1, 2, 3]);

// 泛型接口

interface CreateArrayFunc<V> {
  (length: number, value: V): Array<V>;
}

function identity<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  console.log("泛型接口》result", result);
  return result;
}

let myIdentity: CreateArrayFunc<string> = identity;

myIdentity(3, "x"); // ['x', 'x', 'x']

// 泛型类

class GenericNumber<T> {
  // ! 非空断言. 联合类型，可选属性
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 泛型约束

// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity("avc");
// loggingIdentity(23123);

// 泛型工具类型
// Partial

interface IFoo {
  a: number;
  b: number;
}

// const fooac: IFoo = { a: 1 }
const fooac: Partial<IFoo> = { a: 1 };

// Record
// 第一种场景
type Fooad = Record<"a", string>;
const fooad: Fooad = { a: "1" }; // 正确
// const fooadf: Fooad = { b: "1" }; // 错误，因为 key 不为 a
// const fooads: Fooad = { a: 1 }; // 错误，因为 value 的值不是 str

// 第二种场景
interface Fooav {
  a: string;
}
interface Barav {
  b: string;
}

type Bazav = Record<keyof Fooav | keyof Barav, number>;

// Pick

interface IFoo {
  a: number;
  b: number;
}

const fooaq: IFoo = {
  a: 1,
  b: 2,
};

const fooaqw: Pick<IFoo, "a" | "b"> = {
  a: 2,
  b: 3,
};

// 错误，使用 Pick 生成的新类型中并不包含 b 属性
// const fooaqa: Pick<IFoo, 'a'> = {
//   b: 2,
// }

// Exclude

type TFoo = Exclude<1 | 2 | 4, 1 | 3>;

const footf: TFoo = 2; // 正确
// const footfq: TFoo = 3 // 错误，因为 TFoo 中不包含 3

// ReturnType

type Func = (value: number) => string;

const fooff: ReturnType<Func> = "1";

// Readonly

interface IFooa {
  name: string;
  age: number;
}

const fooddd: Readonly<IFooa> = {
  name: "cxc",
  age: 22,
};

// foo.name = 'xiaoming' // 错误，因为 name 仅是只读的
// foo.age = 20 // 错误，因为 age 也仅是只读的
