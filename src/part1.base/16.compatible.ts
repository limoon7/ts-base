/*
 * X（目标类型） = Y（源类型），X 兼容 Y
 */
// typeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性
let s: string = "a";
// str = null

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 3, c: 3 };
x = y;

console.log(x, "compatiblex");
// y = x

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 1)参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2)

// 可选参数和剩余参数
let a16 = (p1: number, p2: number) => {};
let b16 = (p1?: number, p2?: number) => {};
let c16 = (...args: number[]) => {};
a16 = b16;
a16 = c16;
// b16 = a16
// b16 = c16
c16 = a16;
c16 = b16;

// 2)参数类型
let handler3 = (a: string) => {};
// hof(handler3)

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p23

// 3) 返回值类型
let f = () => ({ name: "Alice" });
let g = () => ({ name: "Alice", location: "Beijing" });
f = g;
// g = f

// 枚举兼容性
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red16,
  Yellow16,
}
let fruit: Fruit.Apple = 1;
let no: number = Fruit.Apple;
// let color: Color.Red16 = Fruit.Apple

// 类兼容性
class A {
  public constructor(p: number, q: number) {}
  public id: number = 1;
  private name: string = "";
}
class B {
  public static s = 1;
  public constructor(p: number) {}
  public id: number = 2;
  private name: string = "";
}
class C16 extends A {}
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb
// bb = aa
let cc = new C16(1, 2);
aa = cc;
cc = aa;

// 泛型兼容性
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Empty<T> {
  // value16: T;
}
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
obj1 = obj2;

let log1 = <T>(x: T): T => {
  console.log("x");
  return x;
};
let log2 = <U>(y: U): U => {
  console.log("y");
  return y;
};
log1 = log2;
