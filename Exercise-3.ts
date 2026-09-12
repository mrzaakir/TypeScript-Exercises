export {};

function fullName(first: string, last: string): string {
	return first + " " + last;
}

console.log("Full name:", fullName("Adam", "Ahmeed"));


function registerUser(
	username: string,
	isAdmin?: boolean,
	language: string = "en"
): void {
	console.log("Registered user:", { username, isAdmin, language });
}

registerUser("adam", true, "en");
registerUser("taani", true, "som");


function average(...scores: number[]): number {
	if (scores.length === 0) {
		return 0;
	}

	const total = scores.reduce((sum, score) => sum + score, 0);
	return total / scores.length;
}

console.log("Average of 3 scores:", average(80, 90, 100));
console.log("Average of 5 scores:", average(70, 75, 80, 85, 90));
