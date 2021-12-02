// const str = 'We exclaimed, "It\'s so easy!"';
// const regexp = /\"/g;
// console.log(str.replace(regexp, '\''));
const str = "We exclaimed, '\It\'s so easy!\'";
const regexp = /\'(?!s)/g;
console.log(str.replace(regexp, '\"'));