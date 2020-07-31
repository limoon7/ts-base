interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  public constructor(name: string) {
    this.name = name;
  }
  public name: string;
  public eat() {}
  public age: number = 0;
  public sleep() {}
}

interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {},
};

class Auto {
  public state1 = 1;
  // private state2 = 1
}
interface AutoInterface extends Auto {
  state1: number;
}
class CA implements AutoInterface {
  // private state = 2;
  public state1 = 1;
}
class Bus extends Auto implements AutoInterface {}
