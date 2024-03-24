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
