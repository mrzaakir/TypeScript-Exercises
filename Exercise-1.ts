let productName: string = "Notebook";
let price: number = 12.99;
let discountAvailable: boolean = true;



productName = "Planner";
price = 9.99;
discountAvailable = false;


function getDiscount(price: number, discount: number): number {
	return price - price * discount;
}

console.log(getDiscount(100, 0.2));


function printLength(value: unknown): void {
	if (typeof value === "string" || Array.isArray(value)) {
		console.log(value.length);
		return;
	}

	console.log("The value does not have a length.");
}

printLength("Hello");
printLength(123);
