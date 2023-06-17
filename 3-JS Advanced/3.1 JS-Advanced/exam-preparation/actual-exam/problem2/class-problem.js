class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const names = [];

        for (const candidate of candidates) {
            let [name, education, yrsExperience] = candidate.split('-');
            yrsExperience = Number(yrsExperience);

            const existingCandidate = this.jobCandidates.find(element => element.name === name);

            if (existingCandidate) {

                if (yrsExperience > existingCandidate.yearsExperience) {
                    existingCandidate.yearsExperience = yrsExperience;
                }

            } else {
                this.jobCandidates.push({
                    name: name,
                    education: education,
                    yearsExperience: yrsExperience
                });

                names.push(name);
            }
        }

        return `You successfully added candidates: ${names.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minExperience] = chosenPerson.split('-');
        minExperience = Number(minExperience);

        const selectedPCandidate = this.jobCandidates.find(element => element.name === name);

        if (!selectedPCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (selectedPCandidate.yearsExperience < Number(minExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minExperience} years.`);
        }

        selectedPCandidate.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        const selectedPerson = this.jobCandidates.find(candidate => candidate.name === name);

        if (!selectedPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let salary = '';
        if (selectedPerson.education === 'Bachelor') {
            salary = '50,000';
        } else if (selectedPerson.education === 'Master') {
            salary = '60,000';
        } else {
            salary = '40,000';
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length == 0) {
            throw new Error('Candidate Database is empty!');
        }
        const firstLine = 'Candidates list:';

        const secondLine = this.jobCandidates
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(c => `${c.name}-${c.yearsExperience}`);

        return [firstLine, secondLine.join('\n')].join('\n');
    }
}
let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());
