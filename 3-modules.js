// CommonJs , every file is module (by default)
// Modules - Encapsulated code (Only share minimum)

const jhon = "jhon";
const peter = "peter";

const sayHi = (name) => {
  console.log(`Hi ${name}`);
};

sayHi("susan");
sayHi(jhon);
sayHi(peter);
