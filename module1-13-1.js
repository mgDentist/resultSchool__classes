// через function
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';

//     this.setTechnologies = function (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }
//     this.setNewStatus = function (newStatus) {
//         this.status = newStatus;
//     }
// }

// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);

//через class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior';
    }

    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            technologies,
        ];
    }

    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student('maxim', 35);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('in-process');
console.log(student);
