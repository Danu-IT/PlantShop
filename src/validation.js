export const validate = (name, tel) => {
  if (name.value.length < 3) {
    return [false, "name"];
  }
  if (tel.value[0] === "+" && tel.value[1] === "7" && tel.value.length === 12) {
    return true;
  } else if (tel.value[0] === "8" && tel.value.length === 11) {
    return true;
  } else {
    return [false, "tel"];
  }
};
