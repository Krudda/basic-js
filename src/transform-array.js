module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'Not an Array';
//     if (Object.keys(arr).length == 1) return arr;
    if (Object.keys(arr).length == 0) return arr;
//     console.log(Object.keys(arr).length);
    // console.log(arr);

        arr.reduce(function(summ, current, index, array) {
                switch(current) {
                    case '--discard-next':
                        //  console.log(`На индексе ${index} попался элемент ${current}`);
                        //  console.log(arr);
                        if (array[index + 2] !== '--double-prev' && index + 2 <= array.length) {
                            // console.log(`1 На индексе ${index} попался элемент ${current}, и на позиции ${index + 2} стоит элемент ${array[index + 2]}`);
                            (index+1 <= array.length) ? array.splice(index+1, 1) : false;
                            // console.log(arr);
                            array.splice(index, 1, 'DELETED');
                            // console.log(arr, 'Конец');
                            break; 
                       }
                       else if (array[index + 2] == '--double-prev') {
                            // console.log(`2 На индексе ${index} попался элемент ${current}, и на позиции ${index + 2} стоит элемент ${array[index + 2]}`);
                            array.splice(index, 1, 'DELETED');
                            array.splice(index+2, 1, 'DELETED');
                            // console.log(arr, 'Конец');
                            break;
                       }
                       else if (array[index + 2] !== '--double-prev' && index + 2 >= array.length) {
                            // console.log(`3 На индексе ${index} попался элемент ${current}, и на позиции ${index + 2} стоит элемент ${array[index + 2]}`);
                            array.splice(index, 1, 'DELETED');
                        //    console.log(arr, 'Конец');
                            break;
                       }

                    case '--discard-prev': 
                        //  console.log(`На индексе ${index} попался элемент ${current}`);
                        //  console.log(arr);
                        if (index == 0) {
                            array.splice(index, 1, 'DELETED');
                        }
                        for (let j = 1; j <= 6; j++) {
                            if (array[index-j] == 'DELETED') {
                                continue;
                            } else if(index - j < 0) {
                                array.splice(index, 1, 'DELETED');
                            } else {
                                (index-j >= 0) ? array.splice(index-j, 1) : array.splice(index, 1, 'DELETED');
                                array.splice(index-1, 1, 'DELETED');
                                break;
                            }
                        }
                        break;

                    case '--double-next': 
                        //  console.log(`На индексе ${index} попался элемент ${current}`);
                        //  console.log(arr);
                        (index+1 < array.length) ? array.splice(index+1, 0, array[index+1]) : false;
                        // console.log(arr);
                        array.splice(index, 1);
                        // console.log(arr, 'Конец');
                        break;

                    case '--double-prev':
                        //  console.log(`На индексе ${index} попался элемент ${current}`);
                        //  console.log(arr);
                        if (index == 0) {
                            array.splice(index, 1, 'DELETED');
                        }
                        for (let j = 1; j <= 3; j++) {
                            if (array[index-j] == 'DELETED') {
                                continue;
                            } else if(index - j < 0) {
                                array.splice(index, 1, 'DELETED');
                            } else {
                                (index-j >= 0) ? array.splice(index-j, 0, array[index-j]) && array.splice(index+1, 1) : array.splice(index, 1);
//                                 array.splice(index-j, 1, 'DELETED');
                                // console.log(array[index-j]); 
                                //  console.log(arr, 'Конец'); 
                                break;
                            }
                        }


//                         (index-1 >= 0) ? array.splice(index-1, 0, array[index-1]) && array.splice(index+1, 1) : array.splice(index, 1);
                        break;
                     }
         },[]);
    
     return arrNew = arr.filter(el => el != 'DELETED');
}

