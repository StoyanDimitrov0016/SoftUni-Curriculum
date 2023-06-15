class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        const hasInvalidInput = [name, salary, position, department].some((element) => element === '' || element === null || element === undefined);

        if (hasInvalidInput) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                employees: [],
                salaries: [],
            };
        }

        const employee = {
            name,
            salary,
            position,
        };

        this.departments[department].employees.push(employee);
        this.departments[department].salaries.push(salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let maxAverageSalary = 0;

        for (const department in this.departments) {
            const totalSalary = this.departments[department]
                .salaries
                .reduce((acc, curr) => acc + curr, 0);

            const averageSalary = totalSalary / this.departments[department].salaries.length;

            if (averageSalary > maxAverageSalary) {
                maxAverageSalary = averageSalary;
                bestDepartment = department;
            }
        }

        const employees = this.departments[bestDepartment].employees.sort((a, b) => {
            if (b.salary === a.salary) {
                return a.name.localeCompare(b.name);
            }
            return b.salary - a.salary;
        });

        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${maxAverageSalary.toFixed(2)}`;

        employees.forEach((employee) => {
            result += `\n${employee.name} ${employee.salary} ${employee.position}`;
        });

        return result;
    }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
