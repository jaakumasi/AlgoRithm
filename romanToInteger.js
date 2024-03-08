/* Third problem: Roman to integer.
   Given a roman string, converts it to its integer equivalent
*/

var romanToInt = function (s) {
    let int_value = 0
    let splitted_romans = s.split('')

    let roman_to_int_map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let roman_special_pairs = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }

    const iterations = splitted_romans.length
    for (let i = 0; i < iterations; i++) {
        // check if any pair is in the special romans map...
        let pair = splitted_romans[i] + splitted_romans[i + 1]
        let pair_value = roman_special_pairs[pair]
        if (pair_value) {
            int_value += pair_value
            // since the next roman number has already been paired, skip the next iteration
            i++
        }
        else int_value += roman_to_int_map[splitted_romans[i]]
    }

    return int_value
};