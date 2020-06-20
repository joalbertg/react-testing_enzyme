const name   = 'Joalbert';
const surname = 'Gonzalez';

const fullName = `${ name } ${ surname }`;

const getGreet = (name = 'Lisset') => 'Hello ' + name;

export {
  getGreet as default
};

