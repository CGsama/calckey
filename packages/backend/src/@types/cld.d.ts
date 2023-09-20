interface Language {
	readonly name: string;
	readonly code: string;
	readonly percent: number;
	readonly score: number;
}
interface Chunk {
	readonly name: string;
	readonly code: string;
	readonly offset: number;
	readonly bytes: number;
}
interface Options {
	readonly isHTML: false;
	readonly languageHint: string;
	readonly encodingHint: string;
	readonly tldHint: string;
	readonly httpHint: string;
}
interface DetectLanguage {
	readonly reliable: boolean;
	readonly textBytes: number;
	readonly languages: Language[];
	readonly chunks: Chunk[];
}
