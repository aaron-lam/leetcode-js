const getHint = (secret, guess) => {
  if (!secret || !secret.length || !guess || !guess.length || secret.length !== guess.length) {
    return "0A0B";
  }
  let bulls = 0, cows = 0;
  let numbers = new Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    const s = Number(secret.charAt(i));
    const g = Number(guess.charAt(i));
    if (s === g) {
      bulls += 1;
    } else {
      if (numbers[s] < 0) {
        cows += 1;
      }
      if (numbers[g] > 0) {
        cows += 1;
      }
      numbers[s] += 1;
      numbers[g] -= 1;
    }
  }
  return `${bulls}A${cows}B`;
};
