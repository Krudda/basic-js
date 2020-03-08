module.exports = class DepthCalculator {

    // constructor() {
    //     this.count = 0;
    // }

        // makeCounter() {
        //     return function() {
        //         return count++;
        //     };
        // };
        
        // counter = makeCounter();
    
   

    calculateDepth(arr) {
        let count = 0;
        arr.forEach(element => {
            if (Array.isArray(element)) {
                count = Math.max(this.calculateDepth(element), count);
            }
        })
        // return this.count + 1;
        return count + 1;
    }
}