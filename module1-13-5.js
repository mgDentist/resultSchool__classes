class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }

    code() {}

    learnNewTechnologies(...technology) {
        this.technologies.push(...technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior');
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`);
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Middle');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`);
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Senior');
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`);
    }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
const middleDeveloper = new MiddleDeveloper('Игорь', 25);
const seniorDeveloper = new SeniorDeveloper('Максим', 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

seniorDeveloper.learnNewTechnologies('Docker', 'GraphQL', 'atraumatic wisdom teeth extraction');

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
