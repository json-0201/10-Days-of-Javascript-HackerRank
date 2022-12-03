/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    
    try {
        let reversed = s.split("").reverse().join("");
        console.log(reversed);
    }
    catch (err) {
        console.log(err.message);
        console.log(s);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
