/* 4th Problem: Longest Common Prefix.
   Finds the longest common prefix amongst a list of strings
*/

var longestCommonPrefix = function (strs) {
    let shortest_str = strs[0]
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < shortest_str) shortest_str = strs[i]
    }

    let longest_prefix = shortest_str
    // add an empty space to the start of the array; a way to distinguish words 
    strs.splice(0, ' ', 0)
    const joined_strs = strs.join(' ')
    for (let i = 0; i < shortest_str.length; i++) {
        // the number of regex matches in the joined str should equal the number of strings in the array
        const pattern = new RegExp(' ' + longest_prefix, 'g')
        if (joined_strs.match(pattern).length === strs.length - 1) // minus 1 bcos an empty space was inserted
            break
        else {
            let splitted_shortest_str = longest_prefix.split('')
            splitted_shortest_str.pop()
            longest_prefix = splitted_shortest_str.join('')
        }
    }

    return longest_prefix
};

