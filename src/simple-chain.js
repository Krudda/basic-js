const chainMaker = {
  chainArr: [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value == undefined) {
      element = 'null';
    }
    else {
      element = value + '';
    }
    this.chainArr.push( '( ' + element + ' )' );
    console.log(this.chainArr);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position <= 0 || position > this.chainArr.length || ((position ^ 0) !== position)) {
      this.chainArr = [];
      throw 'INVALID POSITION';
    }
    else {
      this.chainArr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() { 
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    if (this.chainArr.length > 1) {
      let chain = this.chainArr.join('~~');
      this.chainArr = []
      return  chain;
    }
    else {
      let chain = this.chainArr.join('');
      this.chainArr = []
      return  chain;
      }
  }
};

module.exports = chainMaker;
