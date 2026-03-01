// Find all pairs in an array whose sum is 10.

// Example: [2, 8, 3, 7, 5, 5]

function findPair(arr,target){
let pair=[];
    for(let i=0;i<=arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
          if(arr[i]+arr[j]===target){
            pair.push([arr[i],arr[j]])
          }
        }
    }
    return pair;
};

console.log(findPair([2, 8, 3, 7, 5, 5], 10));