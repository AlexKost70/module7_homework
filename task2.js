function checkObject(str, obj) {
    if (obj.hasOwnProperty(str)) {
      return true;
    } else {
      return false;
    }
  }
  