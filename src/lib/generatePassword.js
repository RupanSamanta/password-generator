const randomChar = (str)=> {
    return str[Math.floor(Math.random() * str.length)];
}

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}

const generatePassword = (length, uppercase, lowercase, numbers, symbols) => {
  const alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphaLow = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const groups = [];

  if (uppercase) groups.push(alphaUp);
  if (lowercase) groups.push(alphaLow);
  if (numbers) groups.push(numberChars);
  if (symbols) groups.push(symbolChars);

  if (groups.length === 0) return "";

  const passwordChars = [];

  for (const group of groups) {
    passwordChars.push(randomChar(group));
  }

  const allChars = groups.join("");

  while (passwordChars.length < length) {
    const group = randomChar(allChars);
    passwordChars.push(group);
  }

  return shuffle(passwordChars).join("");
}

export { generatePassword }