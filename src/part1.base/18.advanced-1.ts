interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}

// NOTE: 交叉类型
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};

// NOTE: 联合类型
// 字面量类型

let a18: number | string = 1;
let b18: "a" | "b" | "c";
let c18: 1 | 2 | 3;

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

// NOTE: 索引类型

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map((n) => o[n]);
}

interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: "Jarid",
  age: 35,
};
let strings: string[] = pluck(person, ["name"]); // ok, string[]
console.log("strings", strings);

// keyof T
let personProps: keyof Person; // 'name' | 'age'

// pluck(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'

// T[K]

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]; // o[name] is of type T[K]
}

let nameas: string = getProperty(person, "name");
console.log("nameas", nameas);
let age: number = getProperty(person, "age");
// let unknown = getProperty(person, 'unknown'); // error, 'unknown' is not in 'name' | 'age'

// NOTE: 映射类型

type Keyss = "option1" | "option2";
type Flags = { [K in Keyss]: boolean };

// NOTE: 条件类型

type ExcludeA<T, U> = T extends U ? never : T;
