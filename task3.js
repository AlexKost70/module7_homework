function createEmptyObject() {
    let obj = {};
    obj.__proto__ = null;
    return obj;
  }
  

console.log(createEmptyObject());