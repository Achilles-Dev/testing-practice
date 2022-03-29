const capitalise = (string) => {
  let capString = string.charAt(0).toUpperCase();
  for (let i = 1; i < string.length; i++) {
    capString += string.charAt(i);
  }
  return capString;
}


module.exports = capitalise;