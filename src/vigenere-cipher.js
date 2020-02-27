class VigenereCipheringMachine {
    
    encrypt(message, key) {
        if (typeof(message) !== 'string' || typeof(key) !== 'string') throw 'NO VALID ARGUMENTS';
        
        const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

        let messageArr = message.toUpperCase().split('');
        // console.log('messageArr: ', messageArr);

        // let longKey = key.repeat(Math.ceil(messageArr.length / key.length)).slice(0, messageArr.length);
        let falseLongKey = key.repeat(Math.ceil(messageArr.length / key.length));
        let trueLenghtMessageArr = messageArr.filter(el => el.charCodeAt() >= 65 &&  el.charCodeAt() <= 90);
        // console.log('trueLenghtMessageArr: ', trueLenghtMessageArr);

        let longKey = falseLongKey.slice(0, trueLenghtMessageArr.length);
        // console.log('longKey: ', longKey);

        let longKeyArr = longKey.toUpperCase().split('');
        // console.log('longKeyArr: ', longKeyArr);

        // let messageArr = message.toUpperCase().split('');

        // let longKey = key.repeat(Math.ceil(messageArr.length / key.length)).slice(0, messageArr.length);
        // // console.log(longKey);

        // let longKeyArr = longKey.split('');
        // // messageArr = ["A", "T", "T", "A", "C", "K",  _______  "A", "T", _________ "D", "A", "W", "N"]
        // //   longKeyArr = ["L", "E", "M", "O", "N", "L", "E", "M", "O", "N", "L", "E"]

        let codeMessageArr = messageArr.map(function(elem) {
            if (elem.charCodeAt() >= 65 &&  elem.charCodeAt() <= 90) {
                // console.log('elem.charCodeAt(): ', elem, 'равно ', elem.charCodeAt());
                return alphabetArr.findIndex(el => el == elem);
            }
            else {
                // console.log('elem.charCodeAt(): ', elem, 'равно ', elem.charCodeAt());
                return elem;
            }
        });

        let codeLongKeyArr = longKeyArr.map(function(elem) {
            return alphabetArr.findIndex(el => el == elem);
        });

        let codeCipher = codeMessageArr.map(function(elem, index) {
            if (typeof(elem) == 'number') {
                // console.log('elem.charCodeAt(): ', elem, 'равно ', elem.charCodeAt());
                return elem + codeLongKeyArr[index];
            }
            else {
                codeLongKeyArr.splice(index, 0, codeLongKeyArr[index]);
                // console.log('elem.charCodeAt(): ', elem, 'равно ', elem.charCodeAt());
                return elem;
            }
        });

        let cipher = codeCipher.map(element => {
            if (typeof(element) == 'number') {
                if (element < alphabetArr.length) {
                    return alphabetArr[element];
                }
                else {
                    return alphabetArr[element - alphabetArr.length];
                }
            }
            else {
                return element;
            }
        });
        console.log('cipher: ', cipher.join(''));
        return cipher.join('');

    }

    decrypt(message, key) {
        if (typeof(message) !== 'string' || typeof(key) !== 'string') throw 'NO VALID ARGUMENTS';
        // console.log('message:',message,"key:",key);

        const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        let messageArr = message.toUpperCase().split('');

        let falseLongKey = key.repeat(Math.ceil(messageArr.length / key.length));
        let trueLenghtMessageArr = messageArr.filter(el => el.charCodeAt() >= 65 &&  el.charCodeAt() <= 90);
        // console.log('trueLenghtMessageArr: ', trueLenghtMessageArr);

        let longKey = falseLongKey.slice(0, trueLenghtMessageArr.length);
        // console.log('longKey: ', longKey);

        let longKeyArr = longKey.toUpperCase().split('');

        let codeMessageArr = messageArr.map(function(elem) {
            if (elem.charCodeAt() >= 65 &&  elem.charCodeAt() <= 90) {
                // console.log('elem.charCodeAt(): ', elem, 'равно ', elem.charCodeAt());
                return alphabetArr.findIndex(el => el == elem);
            }
            else {
                // console.log('elem.charCodeAt(): ', elem, 'равно ', elem.charCodeAt());
                return elem;
            }
        });

        let codeLongKeyArr = longKeyArr.map(function(elem) {
            return alphabetArr.findIndex(el => el == elem);
        });
        // console.log('codeLongKeyArr до обработки: ', codeLongKeyArr);

        let codeDecipher = codeMessageArr.map(function(elem, index) {
            if (typeof(elem) == 'number') {
                //  console.log('На индексе: ', index, ' стоит элемент ', elem, ' дешифратор для него равен ', codeLongKeyArr[index], ' после расшифровки его номер в алфавите будет ',  elem - codeLongKeyArr[index]);
                return elem - codeLongKeyArr[index];
            }
            else {
                codeLongKeyArr.splice(index, 0, codeLongKeyArr[index]);
                // console.log('На индексе: ', index, 'попался не number. В codeLongKeyArr на индекс ', index, ' добавляю элемент ', codeLongKeyArr[index] );
                return elem;
            }
        });

        // console.log('codeDecipher: ', codeDecipher);
        

        let deCipher = codeDecipher.map(element => {
            if (typeof(element) == 'number') {
                if (element >= 0) {
                    // console.log('>= 0', element);
                    return alphabetArr[element];
                }
                else {
                    // console.log('< 0', element, Math.abs(element), alphabetArr.length - Math.abs(element));
                    return alphabetArr[alphabetArr.length - Math.abs(element)];
                }
            }
            else {
                return element;
            }
        });
        console.log('deCipher: ', deCipher.join(''));
        return deCipher.join('');

    }
}

module.exports = VigenereCipheringMachine;
