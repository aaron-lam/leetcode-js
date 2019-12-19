const numUniqueEmails = (emails) => {
  if (!emails || !emails.length) {
    return 0;
  }
  const res = new Set();
  for (const email of emails) {
    const emailArr = email.split("@");
    const local = emailArr[0];
    const domain = emailArr[1];
    let newLocal = "";
    for (let i = 0; i < local.length; i++) {
      if (local[i] === "+") {
        break;
      }
      if (local[i] !== ".") {
        newLocal += local[i];
      }
    }
    res.add(newLocal + "@" + domain);
  }
  return res.size;
};
