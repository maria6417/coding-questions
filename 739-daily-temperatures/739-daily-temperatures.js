/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// keep track of appeared temperature and their index
// if the next element is larger, then it is easy ( = 1)
// otherwise, we have to keep track of all elements in between until we find a larger number

// iterate from 1th index
// check if element is larger than previous. 
    // if so fill array[i - 1] to 1, 
    // also check the tracked temperature and see if elemnt is larger than any
    // if so, fill array[index] to i - index for all the value arrays
// otherwise
    // keep track with object, key as temperature, value as array of appeared indexes

var dailyTemperatures = function(temperatures) {
    if (temperatures.length === 1) return [0];
    const appeared = {};
    const result = [];
    for (let i = 1; i < temperatures.length; i++) {
        if (temperatures[i] > temperatures[i - 1]) {
            result[i - 1] = 1;
            for (let key in appeared) {
                if (key < temperatures[i]) {
                    for (let j = 0; j < appeared[key].length; j++) {
                        result[appeared[key][j]] = i - appeared[key][j];
                    }
                    delete appeared[key];
                }
            }
        } else {
            appeared[temperatures[i - 1]] ? appeared[temperatures[i -1]].push(i - 1) : appeared[temperatures[i - 1]] = [i - 1];
        }
    }
    
    for (let key in appeared) {
        for (let j = 0; j < appeared[key].length; j++) {
            result[appeared[key][j]] = 0;
        }
        delete appeared[key];
    }
    while (result.length !== temperatures.length) {
        result.push(0);
    }
    return result;
};