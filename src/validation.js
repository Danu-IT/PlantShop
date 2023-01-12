export const validate = (name, tel) => {
  if (name.value.length < 3) {
    return [false, "name"];
  }
  if (tel.value[0] === "+" && tel.value[1] === "7" && tel.value.length === 12) {
    return numOrString(true, tel) == 11 ? true : [false, "tel"];
  } else if (tel.value[0] === "8" && tel.value.length === 11) {
    return numOrString(false, tel) == 11 ? true : [false, "tel"];
  } else {
    return [false, "tel"];
  }
};

const numOrString = (plus, arr) => {
  const num = plus ? arr.value.slice(1, 12) : arr.value;
  return num.split("").filter((el) => (+el === Number(el) ? true : false))
    .length;
};
