// 类型推断
let a15 = 1;
let b15 = [1, null, "a"];
let c15 = { x: 1, y: "a" };

let d = (x = 1) => x + 1;

window.onkeydown = (event: any) => {
  // console.log(event.button)
};

// NOTE: 类型断言

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;


let someValueAs: any = "this is a string";
let strLengthAs: number = (someValue as string).length;


