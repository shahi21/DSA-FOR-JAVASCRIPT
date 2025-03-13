// finds the smallest elementin the array.
// swaps it with the first unsroted element
// repeats until sorted

function selectionSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
    return arr;
}
console.log(selectionSort([67,859,49,40]));