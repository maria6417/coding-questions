/**
 * @param {string[]} tokens
 * @return {number}
 */



// ["2","1","+","3","*"]
// iterate through the array
// if number, push it to the stack
// if its an operater, then take the top 2 elements from the stack, and calculate with the operator
// once calculated, push back the result into the stack and continue

//["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (['+', '-', '*', '/'].includes(tokens[i])) {
            // take 2 elements out from stack and calculate using operator
            const el1 = Number(stack.pop());
            const el2 = Number(stack.pop());
            if (tokens[i] === '+') stack.push(el1 + el2);
            if (tokens[i] === '-') stack.push(el2 - el1);
            if (tokens[i] === '*') stack.push(el1 * el2);
            if (tokens[i] === '/') stack.push(Math.trunc(el2 / el1));
        } else {
            stack.push(tokens[i]);
        }
    }
    return stack[0];
};

