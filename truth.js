//truthy falsy

var myVar = [];

if (!myVar) {
  console.log("I'm falsy");
} else {
  console.log("I'm truthy");
}

//false, 0, null, "", undefined, NaN === falsy value
//Otherwise all values are truthy
