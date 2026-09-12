export {};

function echo<T>(input: T): T {
	return input;
}

const echoedText = echo("Waku Salamay, Nio");
const echoedNumber = echo(42);
const echoedArray = echo(["Gudud", "Cagaar", "bulug"]);
const echoedObject = echo({ id: 1, active: true });


console.log("Echoed text:", echoedText.toUpperCase());
console.log("Echoed number:", echoedNumber.toFixed(2));
console.log("Echoed array:", echoedArray.join(", "));
console.log("Echoed object ID:", echoedObject.id);


interface ApiResult<T> {
	status: string;
	data: T;
}

const messageResult: ApiResult<string> = {
	status: "success",
	data: "Request completed",
};

const userResult: ApiResult<{ id: number; name: string }> = {
	status: "success",
	data: { id: 101, name: "Maya" },
};

console.log("Message result:", messageResult.data);
console.log("User result:", userResult.data.name);
console.log("User ID:", userResult.data.id);


function first<T>(items: T[]): T {
	if (items.length === 0) {
		throw new Error("Cannot get the first element from an empty array.");
	}

	return items[0];
}

const scores = [88, 94, 76, 91];
const firstScore = first(scores);

const colors = ["bulug", "orange", "purple"];
const firstColor = first(colors);

const users = [
	{ id: 1, name: "Ayah" },
	{ id: 2, name: "Nuuh" },
	{ id: 3, name: "Lia" },
];
const firstUser = first(users);

console.log("First score:", firstScore.toFixed(1));
console.log("First color:", firstColor.toUpperCase());
console.log("First user:", firstUser.name, firstUser.id);
