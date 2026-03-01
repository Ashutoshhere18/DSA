// Find the smallest number in an array using brute force.

function smallestINArray(arr){
    let min=arr[0];

    for(let i=1;i<=arr.length;i++){
       if(arr[i]<min){
        min=arr[i];
       }
    }
    return min;
}

console.log(smallestINArray([2,8,1,4,9,5,6]));