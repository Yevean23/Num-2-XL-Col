export function numToExcelCol(num, oneBased = false) {
    if (typeof (num) != "number") {
        console.log('numToExcelCol expected a number');
    }

    if (num < 0) {
        console.log('number should be greater than 0');
    }
    let ret = '';

    if (oneBased) {
        while (num > 0) {
            num--; // Adjust num to handle 1-based indexing.
            const remainder = num % 26;
            const char = String.fromCharCode(remainder + 65); // Convert remainder to character.
            ret = char + ret; // Append the character to the result.
            num = Math.floor(num / 26); // Update num for the next iteration.
        }
    } else {
        if (num === 0) {
            return 'A';
        }
        didFirst = 0;
        while (num > 0) {
            let i = num % 26;
            let n = String.fromCharCode(i + 65 - didFirst);
            ret = n + ret;
            num = Math.floor(num / 26);
            didFirst = 1;
        }
    }

    return ret;
}

export function excelColtoNum(colname, oneBased = false) {
    let total = 0;
    for (let i = 0; i < colname.length; i++) {
        total *= 26; // Multiply the total by 26 for each position to simulate base 26.
        total += colname.charCodeAt(i) - 64; // Convert the character to its corresponding number and add to the total.
    }
    return oneBased ? total : total - 1;
}