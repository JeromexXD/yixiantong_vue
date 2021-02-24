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

  
}