function isAdditiveNumber(num: string): boolean {
    if(num.length < 3) return false;

    let firstNum = "";
    let secondNum = "";

    for (let i = 0; i < num.length; i++) {
        if (firstNum === "0") return false;
    
        firstNum += num[i];
        secondNum = "";

        for (let j = i + 1; j < num.length; j++) {
            if (secondNum === "0") break;
            secondNum += num[j];
            if (isValid(parseInt(firstNum), parseInt(secondNum), j + 1)) return true;
        }
    }

    return false;

    function isValid(firstNum: number, secondNum: number, start: number) {
        if(start >= num.length) return false;
        
        while (start < num.length) {
            let sum = firstNum + secondNum;
            let sumStr = sum.toString();
            if (!num.startsWith(sumStr, start)) return false;
            start += sumStr.length;
            firstNum = secondNum;
            secondNum = sum;
        }
        return true;
    }
}