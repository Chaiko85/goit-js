"use strict";

class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(string) {
    this._value = this._value + string;
  }

  prepend(string) {
    this._value = string + this._value;
  }

  pad(string) {
    this._value = string + this._value + string;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);
