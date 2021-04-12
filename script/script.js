'use strict';


function calcSum(a, b) {
    if (b === 1) {
        return a;
    } else {
        //console.log(a * calcSum(a, b-1), 'всередині');
        const rezult = calcSum(a, b-1);
        console.log(rezult, 'результат дії функції');
        return a * rezult;
    }
}
console.log(calcSum(2, 3));

