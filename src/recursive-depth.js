module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let count = 1;

        arr.forEach(element => {
            if (Array.isArray(element) !== true) {
 //                 console.log(element, 'It is NOT array!!!');
                 return count;
             }
             else {
                //  console.log('It is an Arraaaaayyyyy!!!!!!');
 //                 hzObj[element] = count + 1;
 //                 console.log('count: ', count);
 //                 console.log('hzObj: ', hzObj);
                 return count = count + this.calculateDepth(element);
             } 
         });
         return count;
    }
};