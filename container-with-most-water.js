/**
 * Two Ptr Problem:
 * given an integer array of height values n, find two lines which, together with the x-axis,
 * forms a container to hold the most water.
 * Return the max area/amount of water
 */

function maxArea(heights) {
    let l_ptr = 0;
    let r_ptr = heights.length - 1;
    let max_area = 0;

    while (l_ptr < r_ptr) {
        let area = (r_ptr - l_ptr) * (heights[l_ptr] <= heights[r_ptr] ? heights[l_ptr] : heights[r_ptr])
        if (area > max_area)
            max_area = area;
        if(heights[l_ptr] < heights[r_ptr]) l_ptr += 1;
        else r_ptr -= 1;
    }

    return max_area;
}

let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights)) 