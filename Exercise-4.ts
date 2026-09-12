export {};

interface User {
	readonly id: number;
	username: string;
	password: string;
	email?: string;
}

function login(user: User): void {
	console.log("Logged in:", user.username);
	console.log("Email:", user.email ?? "No email provided");
}

const userWithoutEmail: User = {
	id: 1,
	username: "Raiza",
	password: "TaaniApi",
};


const userWithEmail: User = {
	id: 2,
	username: "Turaab",
	password: "Alpha",
	email: "turaab@gmail.com",
};

login(userWithoutEmail);


login(userWithEmail);


