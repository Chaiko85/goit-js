"use strict";

const countProps = function(obj) {
  let total = 0;

  for (const property in obj) {
    total += 1;
  }

  return total;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
