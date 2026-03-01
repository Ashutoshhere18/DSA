// Check if an array is sorted or not using brute force.

function isSorted(arr){

    for(let i=0;i<=arr.length;i++){
      if(arr[i]>arr[i+1]){
        return "Not Sorted!"
      }
    }
    return "is Sorted!"
};

console.log(isSorted([2,4,5,6,8]));