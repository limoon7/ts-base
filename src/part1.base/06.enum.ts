// NOTE: 数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}

console.log("数字枚举》Role.Reporter", Role.Reporter);
console.log("数字枚举》Role", Role);
console.log("数字枚举》Role[1]", Role[1]);

// NOTE: 字符串枚举
enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了",
}

console.log("字符串枚举》Message", Message);

// NOTE: 异构枚举，不建议使用异构枚举
enum Answer {
  N,
  Y = "Yes",
}

// 涉及到反向映射，不会为字符串成员生成反向映射
console.log("异构枚举》Answer", Answer, Answer[0], Answer.Y);

// NOTE: 常数项和计算所得项
enum Char {
  // const member
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member
  d = Math.random(),
  // g, // 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
  e = "123".length,
  f = 4,
}

console.log("常数项和计算所得项》 Char", Char);

// NOTE: 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1,
  // May = () => 5,
}
let month = [Month.Jan, Month.Feb, Month.Mar, Month.Apr];

console.log("常量枚举》month", month);

// NOTE: 枚举类型
// 枚举成员没有任何初始值
enum E {
  a,
  b,
}
// 所有枚举成员都是数字枚举
enum D {
  a,
  b,
}
// 所有枚举成员都是数字枚举
enum F {
  a = 0,
  b = 1,
}
// 所有枚举成员都是字符串枚举
enum G {
  a = "apple",
  b = "banana",
}

let e: E = 3;
let dac: D = 3;
let fok: F = 3;
console.log("枚举类型", e, dac, fok);

// 不同枚举类型的值不能相互比较
// console.log(e === fok)
// console.log(e === dac)

let e1: E.a = 3;
let e2: E.b = 3;
let e3: E.a = 3;

// 相同类型的可以
// console.log(e1 === e2)
// console.log(e1 === e3)

let g1: G = G.a;
let g2: G.a = G.a;
console.log("g1,g2", { g1, g2 });
console.log(g1 === g2);
