function getMaxLessThanK(a, b) {
    let arr = [];
    let max = 0;
    
    for (let i=0; i<a; i++) {
        arr.push(i+1)
    }
    
    for (let i=0; i<a; i++) {
        for (let j=i+1; j<a; j++) {
            if (((arr[i]&arr[j])<b) && ((arr[i]&arr[j])>max)) {
                max = arr[i]&arr[j]
            }
        }        
    }
    return max
}


function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
