// 1.
// Calcule o MDC (máximo divisor comum) entre dois números. 
 
let num1 = 40, num2 =60
let mdc = 0
let divisor = 1

while(divisor<=num1 && divisor<=num2){
    // console.log("first " + mdc, divisor, num1, num2)
    if (num1%divisor==0 && num2%divisor==0)
        mdc = divisor

    divisor+=1
    // console.log("after deacrease  " +mdc, divisor, num1, num2)
}

console.log(mdc)