const obj={
    name:"Ichigo",
    zanpakto:"zangetsu"

}
console.log(obj)

const students=[{
    name :"sname1",
    dob :"12/12/1545",
    college :"GLA",
},
{
    name :"sname1",
    dob :"12/12/1545",
    college :"GLA"
}]
console.log(students)
let stdn="dsknd"
let doB="sfwf"
let clg="fsdsa"
const students=[{
    name :stdn,
    dob :doB,
    college :clg,
},
{
    name :"sname1",
    dob :"12/12/1545",
    clg
}]
const thirdObj = {
    schoolName: "School1"
}
students.push(thirdObj)
    
const studentCopy=students
studentCopy.dob="updtaeData"
// console.log(students)
// console.log(studentCopy)
const output = `This is ${students[0].name}, and I am studying in ${students[2].schoolName}`;
console.log(output)

let students = [
    {
        object : "1"
    },
    {
        object : "2"
    },
    {
        object : "3"
    },
    {
        object : "4"
    }
]
// students = students.map(item,index) =>


students.map((value, index, array) => {
    // console.log(value);
    // console.log(index);
    // console.log(array);
    const a = value.order * 2;
    value.order = a;
    return value;
})
console.log(students);


num = [1,2,3,4,5]
for (let index = 0; index < num.length; index++) {
    const element = num[index]+5;
    num[index] = element   
}
// console.log(num);
num.forEach((item,index => {
    
});
if (1 != 1){
    console.log("if");
}
else if (1 == 1){
    console.log("else if");
}
else{
    console.log("else");
    
}
console.log(1+'1');
