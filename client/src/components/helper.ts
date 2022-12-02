export const changeCondition = (condition:[], flag:string, handler:any) => {
    const keys = Object.values(condition);
    const newArray = condition.map((cond:object) => {
      const [key] = Object.keys(cond);
      if (key.includes(flag)) {
        return { [key] : true };
      }
      return { [key] : false };
    });
    handler(newArray);
};
  