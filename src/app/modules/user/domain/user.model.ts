export class User {
	public email: string;
	public password: string;
	public username: string | null;

	constructor(email: string, password: string, username: string | null) {
		this.email = email;
		this.password = password;
		this.username = username;
	}
}

export interface User {
    email: string;
	password: string;
	username: string | null;
}

export interface UserResponse extends User {
	id: number;
}

export interface UserModelResponse {
	message: string;
	code: number;
}