
var MinStack = function() {
    this.stack = [];
    this.mins = {};
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.mins[val] = (this.mins[val] || 0) + 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const val = this.stack.pop();
    this.mins[val]--;
    if (!this.mins[val]) delete this.mins[val];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...Object.keys(this.mins).map(Number));
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */