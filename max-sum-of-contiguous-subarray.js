/*
* Sliding Window Problem:
* find the max sum of any contiguous subarray of window size, k
*/

function maxSum(arr, k) {
    let l_ptr = 0
    let r_ptr = l_ptr + k - 1;

    let mSum = 0;
    while (r_ptr < arr.length) {
        let wSum = arr.slice(l_ptr, r_ptr + 1).reduce((sum, curr) =>
            sum + curr
            , 0);
        if (wSum > mSum) mSum = wSum;

        l_ptr += 1;
        r_ptr += 1;
    }

    return mSum;
}

let n = [1, 9, -1, -2, 7, 3, -1, 2];
console.log(maxSum(n, 4)) // 13
