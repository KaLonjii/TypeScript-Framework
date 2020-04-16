export class Attributes<T> {
	constructor(private data: T) {}

	/**Generic constraint: K is a key of T. The parameter(key) of this func.
   * will be of type of that particular K(key) which can be a number, string
   * or id. The return type of this func. will be of type of that
   * particular K-value.
   */
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};

	set(update: T): void {
		Object.assign(this.data, update);
	}

	getAll(): T {
		return this.data;
	}
}
