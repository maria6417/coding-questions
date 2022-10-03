/**
 * @param {string} s
 * @return {boolean}
 */

// stack
// if letter is (, {, [, accumulate on stack
// otherwise, check if stack has other side if not return false
var isValid = function(s) {
    const chars = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (Object.values(chars).includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack[stack.length - 1] !== chars[s[i]]) return false;
            // if (s[i] === ')' && stack[stack.length - 1] !== '(') return false;
            // if (s[i] === '}' && stack[stack.length - 1] !== '{') return false;
            // if (s[i] === ']' && stack[stack.length - 1] !== '[') return false;
            stack.pop();
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};