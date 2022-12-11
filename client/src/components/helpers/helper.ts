export const changeCondition = (condition: [], flag: string, handler: any) => {
  const keys = Object.values(condition);

  const newArray = condition.map((cond: object) => {
    const [key] = Object.keys(cond);
    if (key.includes(flag)) {
      return { [key]: true };
    }
    return { [key]: false };
  });
  handler(newArray);
};

export const changetwoCondition = (defaultValue: object) => {
  const arr = Object.values(defaultValue).reduce((item, value) => ({
    ...item,
    ...value,
  }));

  for (const key in arr) {
    if (arr[key] == true) {
      // console.log(key)
      return key;
    }
  }
};
