"Use strict";

console.group("Task 1");

class MyArray {
  getArgs() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length = arguments.length;
  }

  push(item) {
    this[this.length++] = item;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const deletedElem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return deletedElem;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
}

const number = new MyArray();

number.getArgs(4, 5, 6);
console.log("number :>> ", number);
number.push(9);
console.log("number :>> ", number);
number.pop();
console.log("number :>> ", number);

console.groupEnd();

console.group("Task 2");

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  validate(value) {
    return value > 0 && value < 100;
  }

  get range() {
    return Object.values(this);
  }

  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError();
    }

    if (value < 0 || value > 100) {
      throw new RangeError();
    }

    this._from = value;
  }

  get from() {
    return this._from;
  }

  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError();
    }

    if (value < this.from || value < 0 || value > 100) {
      throw new RangeError();
    }

    this._to = value;
  }

  get to() {
    return this._to;
  }
}
try {
  const range1 = new RangeValidator(5, 10);
  console.log("range1 :>> ", range1);
  console.log(range1.validate(-55));
  console.log(range1.validate(55));
  console.log(range1.range);
} catch (err) {
  if (err instanceof TypeError) {
    console.log("TypeError :>> Argument must be number type");
  } else if (err instanceof RangeError) {
    console.log(
      "RangeError :>> Argument must be in the range from 0 to 100. Value `from` should be less value `to`"
    );
  } else if (err instanceof Error) {
    console.log("Error :>> Something wunt wrong");
  }
}

console.groupEnd();
