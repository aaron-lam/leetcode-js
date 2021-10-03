const isIncrement = (s) => s === "++X" || s === "X++";

const finalValueAfterOperations = (operations) => operations.reduce((acc, s) => acc + (isIncrement(s) ? 1 : -1), 0);
