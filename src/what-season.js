module.exports = function getSeason(date) {
  
  const fourSeasons = {
   'Jan': 'winter',
   'Feb': 'winter',
   'Mar': 'spring',
   'Apr': 'spring',
   'May': 'spring',
   'Jun': 'summer',
   'Jul': 'summer',
   'Aug': 'summer',
   'Sep': 'autumn',
   'Oct': 'autumn',
   'Nov': 'autumn',
   'Dec': 'winter' };
    
    if (date == null) return 'Unable to determine the time of year!';
    if (typeof(date) == 'string') {
      throw 'Error';
    }
    //==матьево, самая гемморная проверка!!!!! У нормального объекта возвращается пустой массив
    if (Object.keys(date).length > 0) {
      throw 'Error';
    }
    // ===

    regExpDate = /^\w{3}\s\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT+/;
    regExpMonth = /.\w{3}/;

    let dateIsValid = regExpDate.test(date.toString());

    if(dateIsValid ) {
      let monthObj = date.toString().match(regExpMonth);
      let month = monthObj[0].trim();
      for (let key in fourSeasons) {
        if (key == month) return fourSeasons[key];
      }
    }
    else {
       throw 'Error';
    }

};
