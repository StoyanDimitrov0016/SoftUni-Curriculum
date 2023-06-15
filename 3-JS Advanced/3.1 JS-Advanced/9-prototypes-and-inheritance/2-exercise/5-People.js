function people() {

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot instantiate directly.");
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];

            this.tasksByProfession = {
                junior: ['is working on a simple task.'],
                senior: [
                    'is working on a complicated task.',
                    'is taking time off work.',
                    'is supervising junior workers.'
                ],
                manager: ['scheduled a meeting.', 'is preparing a quarterly report.']
            };
        }

        work() {
            let task = this.tasks.shift();
            console.log(`${this.name} ${task}`);
            this.tasks.push(task);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = this.tasksByProfession.junior;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = this.tasksByProfession.senior;
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = this.tasksByProfession.manager;
            this.dividend = 0;

        }

        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }

    return { Employee, Junior, Senior, Manager };
}
