export default {
  formatJSON (arr, key) {
    return arr.filter(item => {
      if (item[key]) {
        item[key] = item[key].split(',');
      }
      return item;
    })
  },
  
  strToArr (str) {
    return str.split(',')
  },

  jsonToArr (str) {
    return JSON.parse(str);
  },

  replaceToSpace (str) {
    return str.replace(/,/g, ' ');
  },

  trimSpace (str) {
    return str.trim();
  },

  throttle (fn, delay) {
    let t = null,
        begin = new Date().getTime();

    return function () {
      let _self = this,
          args = arguments,
          cur = new Date().getTime();

      clearTimeout(t);

      if (cur - begin >= delay) {
        fn.apply(_self, args);
        begin = cur;
      } else {
        t= setTimeout(() => {
          fn.apply(_self, args);
        }, delay)
      }
    }
  }
  
}