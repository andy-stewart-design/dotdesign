export const formatNumber = (num: number, leadZero = false): string => {
	const number = (Math.round(num * 100) / 100).toFixed(1);
	if (num < 10 && leadZero) return `0${number}`;
	else return number;
};
