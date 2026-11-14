function multiply(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') return '0';
    
    let result = Array(num1.length + num2.length).fill(0);

    for  (let num1Curr = num1.length - 1; num1Curr >= 0; num1Curr--) {
        let placeNum1 = num1.length - (num1Curr + 1); 
        let num1Num = Number(num1[num1Curr]);

        for (let num2Curr = num2.length - 1; num2Curr>= 0; num2Curr--) {
            let placeNum2 = num2.length - (num2Curr + 1); 
            let num2Num = Number(num2[num2Curr]);

            let res = num2Num * num1Num;

            let bigPart = Math.floor(res / 10); 
            let smallPart = res % 10; 

            // Calculate positions based on decimal places
            let smallPartIdx  = result.length - 1 - (placeNum1 + placeNum2); 
            let bigPartIdx =  result.length - 1 - (placeNum1 + placeNum2 + 1); 

            // Add units and handle carry
            result[smallPartIdx] += smallPart; 
            if (result[smallPartIdx] > 9) {
                result[bigPartIdx] += 1; 
                result[smallPartIdx] = result[smallPartIdx] % 10
            }

            // Add tens and handle carry
            result[bigPartIdx] += bigPart
            if (result[bigPartIdx] > 9) {
                result[bigPartIdx - 1] += 1;
                result[bigPartIdx] = result[bigPartIdx] % 10;
            }
        }
    }

    if (result[0] === 0) {
        result.shift();
    }
    
    return result.join('');
};