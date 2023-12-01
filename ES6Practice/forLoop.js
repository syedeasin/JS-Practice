//For in loop, it can iterate only into obj

const obj = {
  name: "Javascript",
  estd: "1995",
  founder: "Brendan Erich",
};

for (x in obj) {
  console.log(x);
}

//For of loop, it can iterate through all type of iterable elements like string, array and others
const myArray = [1, 2, 3, 5, 6];
let name = "Syed Mohammad Easin";
for (x of myArray) {
  console.log(x);
}

for (x of name) {
  console.log(x);
}
//array or string e for in use korle index dekha jabe
for (x in name) {
  console.log(x);
}
