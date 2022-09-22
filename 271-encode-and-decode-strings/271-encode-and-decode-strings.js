/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
//["Hello","World"]
var encode = function(strs) {
    // map strs to append length of str to beginning of str
    return strs.map((str) => str.length.toString() + '$' + str).join('');
    // join with empty space & return
    // ["5Hello", "5World"]
    // "5Hello5World"
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    //"$5$Hello5World"
    // declare empty array
    const result = [];
    // while s is not empty
    let index = 0;
    while (index < s.length) { //length is 12
        let length = '';
        while (s[index] !== '$') {
            length += s[index++];
        }
        const str = s.slice(index + 1, index + 1 + Number(length)); // Hello
        result.push(str);
        index += Number(length) + 1; // 6
    }
        // take the first letter out, which will define the length of the first string
        // take out the length out from s, and push to array

    // return array
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */