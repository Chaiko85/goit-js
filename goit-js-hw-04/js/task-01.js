"use strict";

const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
    this.discount = value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  }
};

account.changeDiscount(0.15);
console.log(account.discount);

console.table(account.showOrders());

account.addOrder(5000, "order-4");
console.log(account.balance);
console.table(account.showOrders());
