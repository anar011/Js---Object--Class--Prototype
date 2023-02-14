"use strict"

/////homework

// let getReverseStr = (str) => {

//     return str.Split("").reverse().join("");
// }

// console.log(getReverseStr("Cavid") );



//// object


// let stu1 = {
//     name:"Konul",
//     surname:"Ibrahimova",
//     email: "konul@gmail.com" ,
//     phones: [2541, 2562155] ,
//     education: {
//         name: "Programming",
//         names: ["Programming" , "Digital marketing"]
//     }
// }

// stu1.address = "Nefciler" ;

// console.log(stu1.address)

// console.log(stu1.name)

// for (const key in stu1){

//     // console.log(key)

//     console.log(key + "/" + stu1[key])
// }

// let user = {};

// user.name = "Pervin"

// console.log(user.name)  

// for(const item of stu1.phones) {

//     console.log(item)
// }

// console.log(stu1.education.name)

// console.log(stu1.education.names)

// let stu1 = {
//     id:1 ,
//     name:"Ali",
//     surname:"Talibov",
//     address:"Xetai"

// }

// let stu2 = {
//     id:2 ,
//     name:"Hesen",
//     surname:"Hesenov",
//     address:"Nizami"

// }
// let stu3 = {
//     id:3 ,
//     name:"Zeynal",
//     surname:"Zeynalli",
//     address:"Razin"

// }

// let stu4 = {
//     id:4 ,
//     name:"Elekber",
//     surname:"Hesenov",
//     address:"Bayil"

// }

// let group = {
//     name: "P135",
//     capacity:3,
//     students:[],
//     addStudent:function (student) {
//         // console.log(this)
//         // console.log(student)
//         // console.log(this.students)
//         //   this.students.push(student)


//         //    console.log(student.id)

//         let stu = this.students.find(s => s.id == student.id);

//         /// console.log(stu)
       
//         // if(stu != undefined){

//         //     console.log("student already exist")
//         //     return;
//         // }

//         if(stu != undefined){

//             console.log("student already exist")
//             return;
//         } 



//         if(this.students.length == this.capacity){
//             console.log("group already filed");
//             return;

//         }

//         this.students.push(student)

//     },

//     updateStudent:function(student){

//         let stu = this.students.find(s => s.id == student.id);

//         if (stu != undefined){
//             stu.address = student.address;

//         }


//     },

//     getStudents:function () {
//         /// console.log(this.students)
//         // for ( const item of this.students) {
//         //    console.log(`${item.name} ${item.surname} ${item.address}`)
            
//         // }

//         return this.students
//     }

    




// }

// // console.log(group)

// // group.addStudent()

// group.addStudent(stu1)

// // group.addStudent(stu1)

// group.addStudent(stu2)
// group.addStudent(stu3)

// // // console.log(group.students)


// group.getStudents()

// console.log(group.students.length)


// let arr = [1,2,3,5];

// let data = arr.find(m=>m > 2);

// console.log(data)

// console.log(group.getStudents())


// let datas = group.getStudents();

// getStudentsDatas(datas);

// getStudentsDatas(group.getStudents());

// function getStudentsDatas(arr) {

//     for (const item of arr) {
        
//         console.log(`${item.name} ${item.surname} ${item.address}`)
//     }
// } 


// let updatedStudent = {
//     id:2,
//     address:"ehmedli"
// }

// group.updateStudent(updatedStudent);

// let datas = group.getStudents();

// getStudentsDatas(datas);


//Elcanin oxudugu yupiter otaginin capacity ne qederdir

// let user = {
//     name:"Elcan",
//     company:{

//         name:"Code academy",
//         rooms:[
//             {
//                 name:"Yupiter",
//                 capacity : 15,
//                 computers:["HP","Apple", "Acer"]
//             },
             
//             {
//                 name:"Saturn",
//                 capacity:10
//             }
//         ]
//     }
// }

// function getCRoomCapacityByUser(user) {

//     let rooms = user.company.rooms;
//     let computers = [];


//     for (const room of rooms) {
//         if(room.name == "Yupiter"){
//             // console.log(room.capacity.length)
//             // console.log(room.capacity)
//             computers = room.computers;
//         }
        
//     }
//     return computers;
// }

// // getCRoomCapacityByUser(user)

// console.log(getCRoomCapacityByUser(user))




// // function getCRoomCapacityByUser(user) {

// //     let rooms = user.company.rooms;

// //     console.log(rooms)
// // }

// // getCRoomCapacityByUser(user)



// class Car{
//     constructor(name, speed){
//         this.name = name;
//         this.speed = speed;
//     }
// }

// let car1 = new Car("BMW", 500)
// console.log(car1.name)