const defangIPaddr = (address) => {
  if (!address || !address.length) {
    return "";
  }
  return address.replace(/\./g, "[.]");
};
