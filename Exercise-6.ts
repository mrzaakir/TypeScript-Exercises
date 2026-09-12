export {};

enum UserRole {
	Superadmin = "superadmin",
	Moderator = "moderator",
	Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
	return role !== UserRole.Viewer;
}

console.log("Superadmin can edit:", canEdit(UserRole.Superadmin));
console.log("Moderator can edit:", canEdit(UserRole.Moderator));
console.log("Viewer can edit:", canEdit(UserRole.Viewer));


const button = { disabled: false } as unknown as HTMLButtonElement;

console.log("Button disabled before assertion:", button.disabled);
button.disabled = true;
console.log("Button disabled after assertion:", button.disabled);
