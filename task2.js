const reverseString = (string) => {
  let revString = '';

    for (i = string.length - 1 ; i >= 0; i--){
        revString += string.charAt(i).toLowerCase();
    }
    return revString;
}

module.exports = reverseString;