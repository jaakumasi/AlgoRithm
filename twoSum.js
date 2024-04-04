/*  first Leetcode problem:
    A two-sum algo. that returns all num pairs that sum up to the given target number
*/

var twoSum = function (nums, target) {
    let output = []
    /**
     * shape of map: 
     * {
     *   'number': {
     *       'value': number  // the difference between the number and the target
     *       'count': number, // number of times it occurs in the nums array
     *    }
     * }
     */
    let map = {}

    // create a map entry for each number whose value is an obj: 
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]])
            map[nums[i]].count += 1
        else {
            map[nums[i]] = {
                value: target - nums[i],
                count: 1,
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let val_count_obj = map[nums[i]]
        /* if any number == to its difference with the target and occurs more than once, 
           it passes as a two-sum */
        if (val_count_obj.value === nums[i] && val_count_obj.count > 1) {
            output.push([nums[i], nums[i]])
            delete map[nums[i]]
        }
        /* if the difference between the number (nums[i]) and the target is != to the number, 
           then its pair is not a value equal to itself so search for its complement */
        else if (val_count_obj.value !== nums[i]) {
            let complement_val = map[val_count_obj.value]
            if (complement_val) {
                output.push([nums[i], map[nums[i]].value])
                delete map[nums[i]]
            }
        }
    }

    return output;
};

const nums = [2, 7, 15, 11, -6]
const target = 9

console.log(twoSum(nums, target))
