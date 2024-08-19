export const isObjectEmpty = (data) => {
	if (data && typeof data === "object") {
		if (Array.isArray(data)) {
			return data.length > 0 ? false : true;
		} else {
			return Object.keys(data).length > 0 ? false : true;
		}
	}
	return true;
};
