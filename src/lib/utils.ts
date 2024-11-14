export const handleKeypress = (e: KeyboardEvent, keys: string[], callback: Function) => {
	if (keys.includes(e.code)) {
		callback();
	}
};
