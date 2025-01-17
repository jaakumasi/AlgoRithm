const maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let l_ptr = 0;
    let r_ptr = nums.length - 1;
    let count = 0;

    while (l_ptr < r_ptr) {
        let sum = nums[l_ptr] + nums[r_ptr];
        if(sum === k) {
            count++;
            l_ptr += 1;
            r_ptr -= 1;
        }
        else if (sum < k) l_ptr += 1;
        else r_ptr -= 1; 
    }

    return count;
};

let nums = [3,1,3,4,3]
console.log(maxOperations(nums, 5))

