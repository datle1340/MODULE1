let btCreate = document.getElementById("btCreate");
let arrStudents = JSON.parse(localStorage.getItem("arrStudents"));
btCreate.addEventListener("click", function(){

 let arrStudents = JSON.parse(localStorage.getItem("arrStudents"));
 let studentName = document.getElementById("studentName").value;
 let studentMail = document.getElementById("studentMail").value;
 let studentPhone = document.getElementById("studentPhone").value;
 let studentPlace = document.getElementById("studentPlace").value;

if (!studentMail || !studentName || !studentPhone || !studentPlace) {
    alert("Hay nhap day du thong tin");
  }
else{
    let exist = false;
    if (arrStudents != null) {
        for (const student of arrStudents) {
            if (student.studentName == studentName) {
                //Đã tồn tại Name
                exist = true;
                break;
            }
        }
    }
    if (exist) {
        //Đã tồn tại
        editStudent();
    } else {
       createStudent();
    }

}
    
})

function createStudent(){ 
    let arrStudents = JSON.parse(localStorage.getItem("arrStudents"));
    if (arrStudents==null){
        arrStudents =[];
    }
    let studentName = document.getElementById("studentName").value;
    let studentMail = document.getElementById("studentMail").value;
    let studentPhone = document.getElementById("studentPhone").value;
    let studentPlace = document.getElementById("studentPlace").value;
    let studentGende = document.getElementById("studentGende").value;
        let studentNew = {studentName, studentMail, studentPhone, studentPlace,studentGende };
        arrStudents.push(studentNew);
    localStorage.setItem("arrStudents", JSON.stringify(arrStudents));
 
}

function readStudent(arrStudents){
    
    if (arrStudents==null){
        arrStudents =[];
   }
   let tableBody = document.getElementById("tableBody");
   tableBody.innerHTML = "";
   arrStudents.forEach((student, index) =>  {
       tableBody.innerHTML += `
       <tr>
           <td>${
               index + 1
           }</td>
           <td>${student.studentName}</td>
           <td>${student.studentMail}</td>
           <td>${student.studentPhone}</td>
           <td>${student.studentPlace}</td>
            <td>
            <button type="button" class=""  onclick="updateStudent('${
                student.studentName
           }')">Edit</button>
          |
           
            <button type="button" class="" onClick="deleteStudent('${student.studentName}')">Delete</button>
            </td>
            </tr>
       `
       });
 
}
readStudent(arrStudents);

function updateStudent(){


}

function deleteStudent(studentName){
    let arrStudents = JSON.parse(localStorage.getItem("arrStudents"));
  
    for(let i = 0; i < arrStudents.length; i++){
        if (arrStudents[i].studentName === studentName) {
            arrStudents.splice(i,1);
          //console.log(result);
        }
      }
      localStorage.setItem("arrStudents", JSON.stringify(arrStudents));
      readStudent(arrStudents);
 }

 function updateStudent(studentName){
    let arrStudents = JSON.parse(localStorage.getItem("arrStudents"));
    let studentUpdate = arrStudents.filter((student) => {
        if (student.studentName == studentName) {
            return student;
        }
    });

   document.getElementById("studentName").value = studentUpdate[0].studentName;
  document.getElementById("studentMail").value =studentUpdate[0].studentMail;

  document.getElementById("studentPhone").value=studentUpdate[0].studentPhone;
   document.getElementById("studentPlace").value=studentUpdate[0].studentPlace;
    document.getElementById("studentGende").value=studentUpdate[0].studentGende;

}
function editStudent() {
    
    let arrStudents = JSON.parse(localStorage.getItem("arrStudents"));
  
    let studentName = document.getElementById("studentName").value;
    let studentMail = document.getElementById("studentMail").value;
    let studentPhone = document.getElementById("studentPhone").value;
    let studentPlace = document.getElementById("studentPlace").value;
    let studentGende = document.getElementById("studentGende").value;
   
    let studentUpdate = arrStudents.map(student => {
        if (student.studentName == studentName) {
            student.studentMail = studentMail;
            student.studentPhone = studentPhone;
            student.studentPlace = studentPlace;
            student.studentGende = studentGende;

        }
        return student;
    });
    
    localStorage.setItem("arrStudents", JSON.stringify(studentUpdate));
 
    readStudent(arrStudents);
 
}