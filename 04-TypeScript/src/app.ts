import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Payment } from "./classes/Payment.js";

let docOne: HasFormatter;

let docTwo: HasFormatter;

const anchor = document.querySelector("a")!;

console.log(anchor.href);

const form = document.querySelector("form")!;

const alsoForm = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(alsoForm.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

alsoForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

const invOne = new Invoice("mario", "work on website", 20);
const invTwo = new Invoice("Me", "work on car", 40);

let invoices: Invoice[] = [];

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));

//interface

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "indya",
  age: 24,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log(`hi, ${person.name}`);
};

greetPerson(me);

//ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
}

const doc = {
  ResourceType: ResourceType.BOOK,
};

//tuples

let tup: [string, number, boolean] = ["dog", 13, true];
