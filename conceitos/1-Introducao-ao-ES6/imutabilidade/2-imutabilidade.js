const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jeniffer',
        grade: 4
    },
    {
        name: 'Paulo',
        grade: 10
    }
];

function getApprovedStudents(studentList) {
    return studentList.filter(student => student.grade >= 7)
}

console.log('Alunos Aprovados:');
console.log(getApprovedStudents(students));


console.log('Lista de Alunos:');
console.log(students)