/* quick sort - O(nlogn) */

function sort(arr) {
    if (arr.length < 2) return arr
    let pivot = arr[0];
    arr.shift()
    let less = [];
    let greater = [];
    for (let n of arr)
        if (n <= pivot) less.push(n)
    for (let n of arr)
        if (n > pivot) greater.push(n)

    return [...sort(less), pivot, ...sort(greater)]
}

let arr = [102, -44, 11, 560, 4, 2, 4]
console.log(sort(arr))
