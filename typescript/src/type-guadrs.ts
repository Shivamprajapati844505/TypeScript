function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); //TypeScript knows it's a string
  } else {
    console.log(id.toFixed(2));    // it's a number
  }
}

let str = new printId("shivam");
let num = new printId(8926464);