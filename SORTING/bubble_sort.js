// compares adjacent elements.
// swaps if they are in the wrong order.
// repeats until no swaps are needed.


function bubleSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubleSort([90,45,100,45,64,89]));