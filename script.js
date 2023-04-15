/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
// PrintDeveloperbyMap()
// PrintDeveloperbyForEach()
// addData()
// removeAdmin()
  concatenateArray()
function call(item,i){
  let prof =item.profession;
  if(prof=="developer")
  {
    return item;
  }
}

function callforEach(item){
if(item.profession=="developer"){
  console.log(item)
}
}
//Remove function 
function remove(item,i){
  if(item.profession=="admin")
  {
    arr.pop(i);
  }
}

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let ans = arr.map(call);
  for(let i=0;i<ans.length;i++){
    if(ans[i]!=undefined){
      console.log(ans[i]);
    }
  }

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.forEach(callforEach)
  console.log(arr)
   
}

function addData() {
  //Write your code here, just console.log
  let element = { id: 4, name: "Gopal", age: "24", profession: "coder" }
  arr.push(element)
  console.log(arr)
 

}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach(remove)
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { no: 4, name: "A", class: "1", subject: "X" },
    { no: 5, name: "B", class: "2", subject: "Y" },
    { no: 6, name: "C", class: "3", subject: "Z" },
  ];
  let newArr = arr.concat(arr2)
  console.log(newArr)
}
