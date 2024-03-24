let message: string = "Hello World";
console.log(message);

//Literal (exact/specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

function greeting(name: string | null): Number {
  // to prevent from cases where name can be null
  if (name) console.log(name.toUpperCase());
  return 1;
}

greeting("null");
greeting(null);

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

if (customer !== null) console.log(customer.birthday);
// or
// Optional property access operator : ?
console.log(customer?.birthday);

//Optional element access operator : .?
// customer?.[0]    array

//optional call
let log: any = null;
// here since by adding ?. before ('a') we are checking if log is a function or not otherwise we would have gotten an error OR WE COULD HAVE USED IF ELSE
console.log(log?.("a"));

//output:
// $ tsc && node dist/demo.js
// Hello World
// NULL
// 2024-03-24T18:31:04.295Z
// 2024-03-24T18:31:04.295Z
// undefined
