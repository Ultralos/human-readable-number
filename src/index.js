module.exports = function toReadable(number) {
    let arrA = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    arrB = [ 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    arrC = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    num = number + "";
    let readable = [];
    let numToArr = num.split("");

    for (i = 0; i < numToArr.length; i++) {
        if (num === "0") {
            return "zero";
        }
        if (numToArr.length === 3) {
            readable.push(arrA[numToArr[i] - 1]);
            readable.push("hundred");
            numToArr.shift();
            num = num.substr(1);
        }
        if (
            numToArr.length === 2 &&
            numToArr[numToArr.length - 2] === "0" &&
            numToArr[numToArr.length - 1] === "0"
        ) {
            return readable.join(" ");
        }
        if (numToArr.length === 1 || numToArr[numToArr.length - 2] === "0") {
            readable.push(arrA[num - 1]);
            return readable.join(" ");
        }
        if (numToArr.length === 2 && numToArr[numToArr.length - 1] === "0") {
            readable.push(arrB[numToArr[i] - 1]);
            return readable.join(" ");
        }
        if (num > 10 && num < 20) {
            readable.push(arrC[numToArr[numToArr.length - 1] - 1]);
            return readable.join(" ");
        }
        if (numToArr.length === 2) {
            readable.push(arrB[numToArr[i] - 1]);
            readable.push(arrA[numToArr[numToArr.length - 1] - 1]);
            return readable.join(" ");
        }
    }
};
