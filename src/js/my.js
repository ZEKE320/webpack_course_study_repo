export default () => {
  const obj = { a: 1, b: 2 };
  const newObj = { ...obj, c: 3 };
  console.log(`Called module my.js!!! newObj: ${JSON.stringify(newObj)}`);
};
