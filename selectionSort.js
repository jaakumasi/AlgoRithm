/* A selection sort algorithm that takes an array of elements of the same type
   and sorts them alphabetically. 
   For strings, the sort is case insensitive.
   Has a bad time complexity of O(n^2).
*/

const findSmallest = (arr) => {
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (typeof smallest === 'number' && arr[i] < smallest ||
            (typeof smallest === 'string' && arr[i].localeCompare(smallest, { sensitivity: 'base' }) === -1)
        )
            smallest = arr[i]
    }
    return smallest
}

const sort = (arr) => {
    let sortedArr = []
    const iterations = arr.length
    for (let i = 0; i < iterations; i++) {
        const smallest = findSmallest(arr)
        sortedArr.push(smallest)
        arr.splice(arr.indexOf(smallest), 1)
    }
    return sortedArr;
}

const nums = [90, 8, 4, 11, 102, 1, 12]
console.log('sorted nums: ', sort(nums))

const names = ['zedan', 'Gerald', 'Herod', 'brandon']
console.log('sorted names (case insensitive): ', sort(names))
