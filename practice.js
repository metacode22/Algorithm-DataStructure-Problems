const employees = [
  {
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    firstName: 'David',
    lastName: 'Hue',
  },
  {
    fistName: 'Jack',
    lastName: 'Daniel',
  },
];
console.log(
  Object.assign(
    {},
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      fistName: 'Jack',
      lastName: 'Daniel',
    },
  ),
);
