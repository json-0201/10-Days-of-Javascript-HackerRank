/*
 * Create the function factorial here
 */
function factorial(number){
    /* base case */
    if (number <= 1){
        return 1
    }
    /* recursive case */
    else{
        return number*(factorial(number-1))
    }
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
