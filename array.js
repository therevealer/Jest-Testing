function findNo(arr){
    if(!arr || arr.length === 0 ){
        throw new Error("Array is Empty or undefined");
    }

    let largest = arr[0]
    for(i = 1; 1 < arr.length; i++) {
        if(arr[i] > largest){
            largest = arr[i]
        }
    }

    return largest;
}

module.exports = findNo;