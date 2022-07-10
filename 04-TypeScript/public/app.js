"use strict";
const anchor = document.querySelector("a");
console.log(anchor.href);
const form = document.querySelector("form");
const alsoForm = document.querySelector(".new-item-form");
console.log(alsoForm.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
alsoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//classes
class Invoice {
    //   client: string;
    //   details: string;
    //   amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on website", 20);
const invTwo = new Invoice("Me", "work on car", 40);
let invoices = [];
invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));
