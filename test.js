// Sample data for initial students array
const students = [
    {
        ID: 1,
        name: 'Ahmad Raza',
        age: 21,
        gpa: '100',
        degree: 'BCA',
        email: 'ahmadraza2@gmail.com'
    },
    {
        ID: 2,
        name: 'Danish Raza',
        age: 22,
        gpa: '98',
        degree: 'MBA',
        email: 'danish12@gmail.com'
    },
    {
        ID: 3,
        name: 'Arman Khan',
        age: 20,
        gpa: '97',
        degree: 'Arts',
        email: 'Armankhan23@gmail.com'
    }
];

// Function to display students in the table
function displayStudents() {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';

    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.gpa}</td>
        <td>${student.age}</td>
        <td>${student.degree}</td>
        <td>
          <span class="edit-icon" onclick="editStudent(${student.ID})">&#9998;</span>
          <span class="delete-icon" onclick="deleteStudent(${student.ID})">&#128465;</span>
        </td>
      `;
        tableBody.appendChild(row);
    });
}

// Function to add a new student
function addStudent(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const gpaInput = document.getElementById('gpa');
    const ageInput = document.getElementById('age');
    const degreeInput = document.getElementById('degree');

    const newStudent = {
        ID: students.length + 1,
        name: nameInput.value,
        email:emailInput.value,
        gpa: gpaInput.value,
        age: ageInput.value,
        degree: degreeInput.value
    };

    students.push(newStudent);
    displayStudents();
    document.getElementById('studentForm').reset();
}

// Function to edit a student
function editStudent(studentID) {
    const studentToEdit = students.find((student) => student.ID === studentID);

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const gpaInput = document.getElementById('gpa');
    const ageInput = document.getElementById('age');
    const degreeInput = document.getElementById('degree');
    const submitBtn = document.getElementById('submitBtn');

    nameInput.value = studentToEdit.name;
    emailInput.value = studentToEdit.email;
    gpaInput.value = studentToEdit.gpa;
    ageInput.value = studentToEdit.age;
    degreeInput.value = studentToEdit.degree;
    submitBtn.textContent = 'Edit Student';

    // Update the student on form submission
    document.getElementById('studentForm').onsubmit = function (event) {
        event.preventDefault();

        studentToEdit.name = nameInput.value;
        studentToEdit.email = emailInput.value;
        studentToEdit.gpa = gpaInput.value;
        studentToEdit.age = ageInput.value;
        studentToEdit.degree = degreeInput.value;

        displayStudents();
        submitBtn.textContent = 'Add Student';
        document.getElementById('studentForm').reset();
        document.getElementById('studentForm').onsubmit = addStudent;
    };
}

// Function to delete a student
function deleteStudent(studentID) {
    const index = students.findIndex((student) => student.ID === studentID);
    if (index !== -1) {
        students.splice(index, 1);
        displayStudents();
    }
}

// Function to handle search functionality
function searchStudents() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm) ||
            student.email.toLowerCase().includes(searchTerm) ||
            student.degree.toLowerCase().includes(searchTerm)
    );

    displayFilteredStudents(filteredStudents);
}

// Function to display filtered students in the table
function displayFilteredStudents(filteredStudents) {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';

    filteredStudents.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.gpa}</td>
        <td>${student.age}</td>
        <td>${student.degree}</td>
        <td>
          <span class="edit-icon" onclick="editStudent(${student.ID})">&#9998;</span>
          <span class="delete-icon" onclick="deleteStudent(${student.ID})">&#128465;</span>
        </td>
      `;
        tableBody.appendChild(row);
    });
}

// Event listener for form submission
document.getElementById('studentForm').onsubmit = addStudent;

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', searchStudents);

// Display students initially
displayStudents();
