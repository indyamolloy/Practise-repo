import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
const anchor = document.querySelector("a");
console.log(anchor.href);
const form = document.querySelector("form");
const alsoForm = document.querySelector(".new-item-form");
console.log(alsoForm.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
alsoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
const invOne = new Invoice("mario", "work on website", 20);
const invTwo = new Invoice("Me", "work on car", 40);
let invoices = [];
invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));
const me = {
    name: "indya",
    age: 24,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    },
};
const greetPerson = (person) => {
    console.log(`hi, ${person.name}`);
};
greetPerson(me);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const doc = {
    ResourceType: ResourceType.BOOK,
};
//tuples
let tup = ["dog", 13, true];
