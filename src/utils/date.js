import moment from "moment";

export const dateDetailDisplay = (date) => {
	if (date) {
		return moment(date).format("DD MMMM YYYY");
	}
	return "";
};

export const dateShortDisplay = (date) => {
	if (date) {
		return moment(date).format("DD/MM/yyy");
	}
	return "";
};
