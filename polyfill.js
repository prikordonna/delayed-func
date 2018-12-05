Array.prototype.mapCustom = function(callback) {
    let anotherArr = [];
    for (let i = 0; i < this.length; i++) {
       anotherArr[i] = callback(this[i]);
    }
    return anotherArr;
};

