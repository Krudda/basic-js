module.exports = function repeater(str, options = {}) {
    
    let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;

    if (addition == '' && repeatTimes == 1) return str;

    (typeof(str) != 'string'  && str != null ) ? string = str.toString() : string = str;
    (typeof(addition) != 'string'  && addition != null ) ? additionString = addition.toString() : additionString = addition;

    // console.log( repeatTimes, separator, additionRepeatTimes, additionSeparator);

    let tail = ''; 

    if (addition !== '') {
        tail = (additionString + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
    }

    let result = (string + tail + separator).repeat(repeatTimes).slice(0, -separator.length);
    console.log(result);
    return result;
};
  