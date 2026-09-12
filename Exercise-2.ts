export {};

let names: string[] = ["Ali", "Burhan", "Cumar"];
let grades: number[] = [90, 85, 65];
let status: boolean[] = [true, false, true];



names.push("Dadir");
grades.push(88);
status.push(false);

console.log("Wrong array examples: names.push(123), grades.push(\"A\"), status.push(\"active\")");
console.log("Correct names:", names);
console.log("Correct grades:", grades);
console.log("Correct status:", status);

// Products can contain strings only.
let products: string[] = ["Phone", "Laptop"];



console.log("Wrong product example: products.push(99)");
console.log("Correct products:", products);

// Tuples enforce a fixed order and fixed types.
let location: [string, number, number] = ["New York", 40.7128, -74.006];



console.log("Wrong tuple examples use the wrong order or types.");
console.log("Correct location:", location);
