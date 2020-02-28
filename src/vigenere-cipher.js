class VigenereCipheringMachine  {
    constructor(typeMashine = true) {
        this.typeMashine = typeMashine;
    }
    encrypt(message, key) {
        if (typeof(message) !== 'string' || typeof(key) !== 'string') throw 'NO VALID ARGUMENTS';
        // console.log('this.encrypt.typeMashine1111: ', this.typeMashine);
        const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

        let messageArr = message.toUpperCase().split('');

        if (this.typeMashine == false) {
            messageArr.reverse();
        }
      
        let falseLongKey = key.repeat(Math.ceil(messageArr.length / key.length));
        let trueLenghtMessageArr = messageArr.filter(el => el.charCodeAt() >= 65 &&  el.charCodeAt() <= 90);
        let longKey = falseLongKey.slice(0, trueLenghtMessageArr.length);
        let longKeyArr = longKey.toUpperCase().split('');

        let codeMessageArr = messageArr.map(function(elem) {
            if (elem.charCodeAt() >= 65 &&  elem.charCodeAt() <= 90) {
                return alphabetArr.findIndex(el => el == elem);
            }
            else {
                return elem;
            }
        });

        let codeLongKeyArr = longKeyArr.map(function(elem) {
            return alphabetArr.findIndex(el => el == elem);
        });

        let codeCipher = codeMessageArr.map(function(elem, index) {
            if (typeof(elem) == 'number') {
                return elem + codeLongKeyArr[index];
            }
            else {
                codeLongKeyArr.splice(index, 0, codeLongKeyArr[index]);
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
        // console.log('Зашифровано: ', cipher.join(''));

        if (this.typeMashine == false) {
            cipher.reverse();
            // console.log('Перевернуто зашифрованое: ', cipher.join(''));
        }

        return cipher.join('');

    }

    decrypt(message, key) {
        if (typeof(message) !== 'string' || typeof(key) !== 'string') throw 'NO VALID ARGUMENTS';
        // console.log('message#############: ',message);

        const alphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
        let messageArr = message.toUpperCase().split('');

        let falseLongKey = key.repeat(Math.ceil(messageArr.length / key.length));
        let trueLenghtMessageArr = messageArr.filter(el => el.charCodeAt() >= 65 &&  el.charCodeAt() <= 90);
        let longKey = falseLongKey.slice(0, trueLenghtMessageArr.length);
        let longKeyArr = longKey.toUpperCase().split('');
        let codeMessageArr = messageArr.map(function(elem) {
            if (elem.charCodeAt() >= 65 &&  elem.charCodeAt() <= 90) {
                return alphabetArr.findIndex(el => el == elem);
            }
            else {
                return elem;
            }
        });

        let codeLongKeyArr = longKeyArr.map(function(elem) {
            return alphabetArr.findIndex(el => el == elem);
        });
        let codeDecipher = codeMessageArr.map(function(elem, index) {
            if (typeof(elem) == 'number') {
                return elem - codeLongKeyArr[index];
            }
            else {
                codeLongKeyArr.splice(index, 0, codeLongKeyArr[index]);
                return elem;
            }
        });

        let deCipher = codeDecipher.map(element => {
            if (typeof(element) == 'number') {
                if (element >= 0) {
                    return alphabetArr[element];
                }
                else {
                    return alphabetArr[alphabetArr.length - Math.abs(element)];
                }
            }
            else {
                return element;
            }
        });
        
        // console.log('this.encrypt.typeMashine: ', this.typeMashine);

        return deCipher.join('');

    }
}

module.exports = VigenereCipheringMachine;
