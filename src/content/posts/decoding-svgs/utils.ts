export const formatNumber = (num: number, leadZero = false, decimal = false): string => {
	const number = Number((Math.round(num * 100) / 100).toFixed(1));
	const needsDecimal = number % 1 === 0;

	if (leadZero && decimal) {
		if (needsDecimal) {
			if (num < 10 && num >= 0) return `0${number}.0`;
			else if (num < 0) return `-0${number * -1}.0`;
			else return `${number}.0`;
		} else {
			if (num < 10 && num >= 0) return `0${number}`;
			else if (num < 0) return `-0${number * -1}`;
		}
	} else if (decimal) {
		if (needsDecimal) return `${number}.0`;
	} else if (leadZero) {
		if (num < 10 && num >= 0) return `0${number}`;
		else if (num < 0) return `-0${number * -1}`;
	}
	return `${number}`;
};

export const ksjdfnj = (num: number, leadZero = false): string => {
	const number = (Math.round(num * 100) / 100).toFixed(1);
	if (num < 10 && leadZero) return `0${number}`;
	else return number;
};
