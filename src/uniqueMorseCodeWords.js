const uniqueMorseRepresentations = (words) => {
  if (!words || !words.length) {
    return 0;
  }
  const morseCode = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const set = new Set();
  for (const word of words) {
    let code = "";
    for (const c of word.split("")) {
      code += morseCode[c.charCodeAt(0) - 97];
    }
    set.add(code);
  }
  return set.size;
};
