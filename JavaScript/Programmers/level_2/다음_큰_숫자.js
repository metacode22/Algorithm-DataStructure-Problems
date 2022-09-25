function toBinaryArray(number) {
	const binary = new Array();

	while (number != 0) {
		if (number % 2) binary.push(1);
		else binary.push(0);

		number = parseInt(number / 2);
	}

	return binary.reverse();
}

function checkOneNumber(nBinaryArray, nextBinaryArray) {
	const oneNumberOfNBinaryArray = nBinaryArray.reduce(
		(accumulator, currentValue) => {
			if (currentValue) return accumulator + 1;
			return accumulator + 0;
		},
		0
	);

	const oneNumberOfNextBinaryArray = nextBinaryArray.reduce(
		(accumulator, currentValue) => {
			if (currentValue) return accumulator + 1;
			return accumulator + 0;
		},
		0
	);

	if (oneNumberOfNBinaryArray === oneNumberOfNextBinaryArray) return true;

	return false;
}

function solution(n) {
	let next = n;

	while (true) {
		next += 1;
		if (checkOneNumber(toBinaryArray(n), toBinaryArray(next))) return next;
	}
}
