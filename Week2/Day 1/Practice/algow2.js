var inverse;
function reverse(arr){
    var start=0;
    while (start<arr.length-start){
        inverse=arr[arr.length-1-start];
        arr[arr.length-1-start]=arr[start];
        arr[start]=inverse;
        start++;
    }
    return arr;
}
console.log(reverse(["a","b","c","d","e"]));
console.log(reverse([1,2,3,4]));