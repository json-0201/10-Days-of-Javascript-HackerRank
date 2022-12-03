/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = []
    let consonants =[]
    
    for (let i=0; i<s.length; i++)
    {
        if (["a","e","i","o","u"].includes(s[i].toLowerCase()))
        {
            vowels.push(s[i])
        }
        else{
            consonants.push(s[i])
        }
    }
    
    for (let i=0; i<vowels.length; i++)
    {
        console.log(vowels[i])
    }
    for (let i=0; i<consonants.length; i++)
    {
        console.log(consonants[i])
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
