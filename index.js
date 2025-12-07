function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function allPlayers() {
    const game = gameObject();
    return{...game.home.players, ...game.away.players };
}

function numPointsScored(playerName) {
    const players = allPlayers();
    return players[playerName] ? players[playerName].points : null;
}

function shoeSize(playerName) {
    const players = allPlayers();
    return players[playerName] ? players[playerName].shoe : null;
}

function teamColours(teamName) {
    const game = gameObject();
    if (game.home.teamName === teamName)
        return game.home.colours;
    if (game.away.teamName === teamName)
        return game.away.colours;
    return null;
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    let team = null;
    if (game.home.teamName === teamName)
        team = game.home;
    if (game.away.teamName === teamName)
        team = game.away;
    if (!team) return [];
    return Object.values(team.players).map(player => player.number);
}

function playerStats(playerName) {
    const players = allPlayers();
    return players[playerName] || null;
}

function bigShoeRebounds() {
    const players = allPlayers();
    let maxShoe = 0;
    let rebounds = 0;
    for (const player in players) {
        if (players[player].shoe > maxShoe) {
            maxShoe = players[player].shoe;
            rebounds = players[player].rebounds;
        }
    }
    return rebounds;
}

function mostPointsScored() {
    const players = allPlayers();
    let maxPoints = 0;
    let topPlayer = "";
    for (const player in players) {
        if (players[player].points > maxPoints) {
            maxPoints = players[player].points;
            topPlayer = player;
        }
    }
    return topPlayer;
}

function winningTeam() {
    const game = gameObject();
    const sumPoints = team => Object.values(team.players).reduce((acc, p) => acc + p.points, 0);
    const homePoints = sumPoints(game.home);
    const awayPoints = sumPoints(game.away);
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const players = allPlayers();
    let longest = "";
    for (const player in players) {
        if (player.length > longest.length) longest = player;
    }
    return longest;
}

function doesLongNameStealATon() {
    const players = allPlayers();
    const longestNamePlayer = playerWithLongestName();
    const maxSteals = Math.max(...Object.values(players).map(p => p.steals));
    return players[longestNamePlayer].steals === maxSteals;
}


module.exports = {
    gameObject, numPointsScored, shoeSize, teamColours, teamNames, playerNumbers, playerStats, bigShoeRebounds, mostPointsScored, winningTeam, playerWithLongestName, doesLongNameStealATon,
};