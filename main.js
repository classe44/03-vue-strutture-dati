var app = new Vue({
    el: '#app',
    data: {
        players: [
            {
                nome:"Clarence Erickson",
                rimbalzi:15,
                falli:11,
                puntiSegnati:46,
                matches: []
            },
            {
                nome:"Jorge McGee",
                rimbalzi:5,
                falli:15,
                puntiSegnati:34,
                matches: []
            },
            {
                nome:"Bryan Baldwin",
                rimbalzi:20,
                falli:20,
                puntiSegnati:41,
                matches: []
            },
            {
                nome:"Stephen Kaufman",
                rimbalzi:13,
                falli:11,
                puntiSegnati:39,
                matches: []
            },
            {
                nome:"Ian Graham",
                rimbalzi:18,
                falli:19,
                puntiSegnati:44,
                matches: []
            },
            {
                nome:"Jerome Rowe",
                rimbalzi:18,
                falli:10,
                puntiSegnati:32,
                matches: []
            },
            {
                nome:"William Giles",
                rimbalzi:9,
                falli:18,
                puntiSegnati:30,
                matches: []
            },
            {
                nome:"Jaime Jenkins",
                rimbalzi:11,
                falli:10,
                puntiSegnati:36,
                matches: []
            },
            {
                nome:"Arnold Valenzuela",
                rimbalzi:14,
                falli:16,
                puntiSegnati:45,
                matches: []
            },
            {
                nome:"Timothy Stafford",
                rimbalzi:7,
                falli:10,
                puntiSegnati:32,
                matches: []
            }
        ],
        opposingTeams: [
            'Atlanta Hawks',
            'Boston Celtics',
            'Brooklyn Nets',
            'Charlotte Hornets',
            'Chicago Bulls',
            'Cleveland Cavaliers',
            'Dallas Mavericks',
            'Denver Nuggets',
            'Detroit Pistons',
            'Golden State Warriors',
            'Houston Rockets',
            'Indiana Pacers',
            'Los Angeles Clippers',
            'Los Angeles Lakers',
            'Memphis Grizzlies',
            'Miami Heat',
            'Milwaukee Bucks',
            'Minnesota Timberwolves',
            'New Orleans Pelicans',
            'New York Knicks',
            'Oklahoma City Thunder',
            'Orlando Magic',
            'Philadelphia 76ers',
            'Phoenix Suns',
            'Portland Trail Blazers',
            'Sacramento Kings',
            'San Antonio Spurs',
            'Toronto Raptors',
            'Utah Jazz',
            'Washington Wizards',
        ],
        activePlayer: -1
    },
    mounted() {
        this.players.forEach( ( player ) => {
            player.matches = this.generateMatches();
        });
    },
    methods: {
        showStats(index) {
            //console.log('Mostro statistiche del giocatore ad indice', index);
            this.activePlayer = index;
        },
        getRandom(min, max) {
            let random = Math.floor(Math.random() * (max - min + 1)+ min);
            return random;
        },
        generateMatches() {
            const matches = [];

            const numberOfMatches = this.getRandom(0, 8);

            for (let i = 0; i < numberOfMatches; i++) {
                const randomTeamIndex = this.getRandom(0, this.opposingTeams.length - 1);
                matches.push(this.opposingTeams[randomTeamIndex]);                
            }

            return matches;
        }
    }
});
