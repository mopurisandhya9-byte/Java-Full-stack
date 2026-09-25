let students = JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;


// Add Student
function addStudent() {

    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let branch = document.getElementById("branch").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || rollno === "" || branch === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        rollno: rollno,
        branch: branch,
        marks: marks
    };

    if (editIndex === -1) {

        students.push(student);

        alert("Student added successfully!");

    } else {

        students[editIndex] = student;

        alert("Student updated successfully!");

        editIndex = -1;
    }

    localStorage.setItem("students", JSON.stringify(students));

    clearForm();

    displayStudents();
}


// Display Students
function displayStudents(list = students) {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    list.forEach((student, index) => {

        let grade = getGrade(student.marks);

        table.innerHTML += `

            <tr>

                <td>${index + 1}</td>

                <td>${student.name}</td>

                <td>${student.rollno}</td>

                <td>${student.branch}</td>

                <td>${student.marks}</td>

                <td>${grade}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${index})">
                        Delete
                    </button>

                </td>

            </tr>

        `;
    });
}


// Grade
function getGrade(marks) {

    marks = Number(marks);

    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}


// Delete Student
function deleteStudent(index) {

    let confirmDelete =
        confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {

        students.splice(index, 1);

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        displayStudents();
    }
}


// Edit Student
function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("rollno").value = student.rollno;
    document.getElementById("branch").value = student.branch;
    document.getElementById("marks").value = student.marks;

    editIndex = index;
}


// Search Student
function searchStudent() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let filteredStudents = students.filter(student =>

        student.name.toLowerCase().includes(searchValue) ||

        student.rollno.toLowerCase().includes(searchValue)
    );

    displayStudents(filteredStudents);
}


// Clear Form
function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("marks").value = "";
}


// Display existing students when page loads
displayStudents();