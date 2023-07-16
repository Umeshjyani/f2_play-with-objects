/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = arr.filter(arr => arr.profession === "developer");
  developers.map(developer => console.log(developer));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if (arr.profession === "developer") {
      console.log(arr);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const filteredArray = arr.filter(arr => arr.profession !== "admin");
  arr = filteredArray;
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "emma", age: "22", profession: "developer" },
    { id: 6, name: "david", age: "24", profession: "designer" },
    { id: 7, name: "lucas", age: "21", profession: "analyst" }
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
