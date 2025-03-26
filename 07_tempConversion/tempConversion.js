const convertToCelsius = temp => {
  let t = (temp - 32) * (5/9);
  if (Number.isInteger(t)) return t;
  
  return +t.toFixed(1);
};

const convertToFahrenheit = temp => {
  let t = (temp * (9/5)) + 32;
  if (Number.isInteger(t)) return t;

  return +t.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
