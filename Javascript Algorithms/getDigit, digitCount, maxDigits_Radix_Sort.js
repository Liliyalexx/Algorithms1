
// getDigit
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// getDigit (7323,2)

// digitCount
function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// digitCount(21388)

// mostDigits
function mostDigits(nums){
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++ ){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// Radix_Sort
function radixSort(nums){
   let maxDigitCount = mostDigits(nums);
  for ( let k=0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length:10}, () => []);
    for (let i = 0; i< nums.length; i++){
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
   
  
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])


time Complexity(Best), (avarage), (worst) : O(nk) n - length of array, k - number of digits

Space Complexity: O(n+k)
