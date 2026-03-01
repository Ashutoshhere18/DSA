// Count how many times a number appears in an array.

function countNumberrepeated(arr,num){
  let count=0;
    for(let i=0;i<arr.length;i++){
      if(num==arr[i]){
         count++;
      }
    }
    return count;
};

console.log(countNumberrepeated([2,3,6,2,4,3,2,5,2],2));