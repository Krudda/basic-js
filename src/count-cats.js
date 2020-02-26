module.exports = function countCats(backyard) {
  // throw 'Not implemented';
  let cats = 0;
  backyard.forEach((elem, index, arr) =>{
    elem.forEach(elem => {
      if (elem == "^^") {
        cats++;
      }
    })
  });
  return cats;
};
