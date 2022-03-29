const stringLength = (string) => {
  if (string.length <= 0) {
    return 'String too short!';
  }else if (string.length > 10) {
    return 'String too long!';
  }else {
    return string.length;
  }
}

module.exports = stringLength;