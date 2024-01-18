export interface Game {
    title: string,
	description: string;
}

export interface GameResponse extends Game {
	id: number;
}

export interface GameModelResponse {
	message: string;
	code: number;
}