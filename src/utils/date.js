import moment from "moment";

export const dateDetailDisplay = (date) => {
	return moment(date).format("DD MMMM YYYY");
};

export const dateShortDisplay = (date) => {
	return moment(date).format("DD/MM/yyy");
};
