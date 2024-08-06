import ExcelJS from "exceljs";
import moment from "moment";

const useExportExcel = () => {
	const headerStyle = (cell) => {
		cell.style.font = { bold: true, size: 10 };
		cell.style.alignment = { horizontal: "center", vertical: "middle" };
		addBorderCell(cell);
	};

	const rowDataStyles = (cell) => {
		addBorderCell(cell);
	};

	const addBorderCell = (cell) => {
		cell.style.border = {
			top: { style: "thin" },
			left: { style: "thin" },
			bottom: { style: "thin" },
			right: { style: "thin" },
		};
	};

	// Generate Excel Data
	const generateHeaders = (ws, value, col) => {
		const column = getColumnHeader(col); // Get column header dynamically
		const cellPos = `${column}${1}`; //Cell Position
		headerStyle(ws.getCell(cellPos));
		ws.getCell(cellPos).value = value;
	};

	const getColumnHeader = (col) => {
		let dividend = col + 1;
		let columnName = "";
		let modulo;

		while (dividend > 0) {
			modulo = (dividend - 1) % 26;
			columnName = String.fromCharCode(65 + modulo) + columnName;
			dividend = parseInt((dividend - modulo) / 26);
		}

		return columnName;
	};

	const generateRowDatas = (ws, value, col, row) => {
		const column = getColumnHeader(col);
		const cellPos = `${column}${row + 2}`;
		rowDataStyles(ws.getCell(cellPos));
		ws.getCell(cellPos).value = value;
	};

	const temp = {
		Sheet1: [
			{
				Header: "",
			},
		],
	};

	const onExportExcel = async (rawData, filename) => {
		const today = moment(new Date()).format("DD-MMM-YYYY");
		const workbook = new ExcelJS.Workbook();
		Object.keys(rawData).forEach((sheet) => {
			const datas = [...rawData[sheet]];
			const worksheet = workbook.addWorksheet(sheet);

			// Set up columns header
			Object.keys(datas[0]).forEach((res, index) => {
				generateHeaders(worksheet, res, index);
			});

			// Set data columns
			datas.forEach((data, rowIndex) => {
				const keys = Object.keys(data);
				keys.forEach((key, colIndex) => {
					generateRowDatas(worksheet, data[key], colIndex, rowIndex);
				});
			});

			worksheet.columns.forEach((column, i) => {
				let maxLength = 0;
				column.eachCell({ includeEmpty: true }, function (cell) {
					var columnLength = cell.value ? cell.value.toString().length : 10;
					if (columnLength > maxLength) {
						maxLength = columnLength;
					}
				});
				column.width = maxLength < 10 ? 10 : maxLength;
			});
		});

		const fileName = `${filename} ${today}.xlsx`;

		workbook.xlsx.writeBuffer().then((buffer) => {
			const blob = new Blob([buffer], {
				type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			});
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = fileName;
			a.click();
		});
	};

	return onExportExcel;
};

export default useExportExcel;
