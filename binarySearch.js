/** binary search - returns the index of the search term if found in the array
 * else returns undefined
 */

function search(arr, item) {
    let lower = 0
    let upper = arr.length - 1

    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2)
        let guess = arr[mid];
        if (item === guess) return mid
        if (item < guess) upper = mid - 1
        else lower = mid + 1
    }
}

let arr = [2, 33, 11, 90, 10, 44]
arr.sort()
console.log(arr)
let searchTerm = 0;
console.log('term: ', searchTerm, ' index: ', search(arr, searchTerm))