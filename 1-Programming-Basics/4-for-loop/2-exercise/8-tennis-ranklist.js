function tennis(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let tournamentPoints = 0;
    let winCount = 0;
    
    for (let i = 2; i < input.length; i++) {
        let tournamentStage = String(input[i]);
        switch (tournamentStage) {
            case `W`: tournamentPoints += 2000; winCount++; break;
            case `F`: tournamentPoints += 1200; break;
            case `SF`: tournamentPoints += 720; break;
        }
    }
    let totalPoints = startingPoints + tournamentPoints;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(tournamentPoints / tournamentsCount)} `);
    console.log(`${(winCount / tournamentsCount * 100).toFixed(2)}% `);
}