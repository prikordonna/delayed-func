if(!Array.prototype.map) {
    Array.prototype.myMap = function(callback) {
        if (this == null) {
            throw new Error(' this is null or undefined');
        }

        if (typeof callback !== 'function') {
            throw new Error(callback + ' is not a function');
        }

        let newArr = [];
        for (let i = 0; i < this.length; i++) {
           newArr[i] = callback(this[i]);
        }
        return newArr;
    };
}
