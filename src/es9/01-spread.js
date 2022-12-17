const user = { username: 'ctoroz', age: 51, country: 'CO'};
const { username, ...values } = user;
console.log(username);
console.log(values);