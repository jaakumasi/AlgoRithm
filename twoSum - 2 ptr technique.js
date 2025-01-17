/*
* uses two opposite directional ptrs to close in the two sums
* shifts the right or left ptr depending on the sum of the values at the ptrs
* the array must be sorted in this case
*/

function twoSum(arr, target) {
    arr.sort((a, b) => a - b);
    let l_ptr = 0;
    let r_prt = arr.length - 1;

    while (l_ptr < r_prt) {
        let sum = arr[l_ptr] + arr[r_prt];
        if (sum === target) {
            return [arr[l_ptr], arr[r_prt]]
        } else if (sum < target) l_ptr += 1;
        else r_prt -= 1
    }

    return []
}

const nums = [0, 10, -9, 7, 19, 4, -11, 6]
const target = 10

console.log(twoSum(nums, target))