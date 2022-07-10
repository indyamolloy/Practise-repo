const anchor = document.querySelector("a")!;

console.log(anchor.href);

const form = document.querySelector("form")!;

const alsoForm = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(alsoForm.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

alsoForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

//classes
class Invoice {
  //   client: string;
  //   details: string;
  //   amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on website", 20);
const invTwo = new Invoice("Me", "work on car", 40);

let invoices: Invoice[] = [];

invoices.forEach((inv) => console.log(inv.client, inv.amount, inv.format()));
