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



// const salaries2 = {
//   TeamLead: { salary: 1000, tax: "99%" },
//   Architect: { salary: 9000, tax: "34%" },
// };
// const team2 = [
//   { name: "Alexander", specialization: "TeamLead" },
//   { name: "Gaudi", specialization: "Architect" },
//   { name: "Koolhas", specialization: "Architect" },
//   { name: "Foster", specialization: "Architect" },
//   { name: "Napoleon", specialization: "General" },
// ];

// const totalSalary = (staff) =>
//   staff.reduce((acc, pos) => {
//     const key = Object.keys(pos);
//     const { salary, tax } = pos[key];
//     const taxValue = 1 + parseFloat(tax) / 100;
//     return acc + salary * taxValue;
//   }, 0);

// function calculateTeamFinanceReport(salaries, team) {
//   const keys = Object.keys(salaries);
//   const staff = team.map(({ specialization }) => ({
//     [specialization]: salaries[specialization],
//   }));
//   const ress = Object.values(staff).filter(
//     (el) => keys.includes(Object.keys(el)[0]) && el
//   );

//   const filter = team.filter((el) => keys.includes(el.specialization));
//   const value = filter.reduce((acc, { specialization: spec }) => {
//     const prefix = `totalBudget${spec}`;
//     const { salary, tax } = salaries[spec];
//     const taxValue = 1 + parseFloat(tax) / 100;

//     if (Object.hasOwn(acc, prefix)) {
//       return { ...acc, [prefix]: acc[prefix] * taxValue + salary * taxValue };
//     }
//     return { ...acc, [prefix]: salary * Math.round(taxValue) };
//   }, {});

//   return {
//     totalBudget: totalSalary(ress),
//     ...value,
//   };
// }

// const result = calculateTeamFinanceReport(salaries2, team2);
// console.log(JSON.stringify(result));

// const indexArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {};
//     args.forEach((item) => index[item.name]);

//     return new Proxy(new target(...args), {
//       get(arr, prop) {
//         switch (prop) {
//           case "push":
//             return (item) => {
//               index[item.name] = item;
//               arr[prop].call(arr, item);
//             };
//           case "findBySpecialization":
//             return (specialization) => index[specialization];
//           default:
//             return arr[prop];
//         }
//       },
//     });
//   },
// });
// const salaries2 = {
//   TeamLead: { salary: 1000, tax: "99%" },
//   Architect: { salary: 9000, tax: "34%" },
// };

// const team2 = [
//   { name: "Alexander", specialization: "TeamLead" },
//   { name: "Gaudi", specialization: "Architect" },
//   { name: "Koolhas", specialization: "Architect" },
//   { name: "Foster", specialization: "Architect" },
//   { name: "Napoleon", specialization: "General" },
// ];
//   const keys = Object.keys(salaries2);
//   const staff = team2.map(({ specialization }) => ({
//     [specialization]: salaries2[specialization],
//   }));

//   const ress = new indexArray (staff)
//   console.log(ress[2])

