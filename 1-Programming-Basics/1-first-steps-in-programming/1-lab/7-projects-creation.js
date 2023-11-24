function creation(input){
let name = input[0];
let projectsCount = Number(input[1]);
let totalHours = projectsCount*3; // every project need 3 hours to be done
console.log(`The architect ${name} will need ${totalHours} hours to complete ${projectsCount} project/s.`)
}
creation([`George`,`4`])