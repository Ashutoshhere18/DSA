// Check whether a number exists in an array (using brute force search).

function isNumberExists(arr,target){


    for(let i=0;i<=arr.length-1;i++){
    if(target==arr[i]){
        return "Number exists!"
    }
    }
    return "Number Not exists!"
};

console.log(isNumberExists([2,5,4,3,6,7],7));