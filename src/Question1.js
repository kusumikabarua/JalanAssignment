const arrangeArray = (arr) => {
  let positiveArr = [],
    negativeArr = [],
    startPositive = true,
    positiveIndex = 0,
    negativeIndex = 0;
  if (arr[0] < 0) {
    startPositive = false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveArr.push(arr[i]);
    } else {
      negativeArr.push(arr[i]);
    }
  }
  let i = 0;
  if (startPositive) {
    while (i < arr.length) {
      if (positiveIndex < positiveArr.length) {
        arr[i] = positiveArr[positiveIndex];
        positiveIndex++;
        i++;
      }
      if (negativeIndex < negativeArr.length) {
        arr[i] = negativeArr[negativeIndex];
        negativeIndex++;
        i++;
      }
    }
  } else {
    while (i < arr.length) {
      if (negativeIndex < negativeArr.length) {
        arr[i] = negativeArr[negativeIndex];
        negativeIndex++;
        i++;
      }
      if (positiveIndex < positiveArr.length) {
        arr[i] = positiveArr[positiveIndex];
        positiveIndex++;
        i++;
      }
    }
  }
  return arr;
};
let arr1=[-3, 1, 2, 4, -6, 8, -8, -1];
let ans = arrangeArray(arr1);
console.log(ans);
