var diceGame = {
    rolls: [],
    regions: {
        die1: null,
        die2: null,
        btn: null,
        gameInfo: null,
        roundInfo: null
    },

    values: {
        message: null,
        roundInfo: null,
        die1: 0,
        die2: 0,
        gameInfo: null
    },

    defineRegions: function() {
        this.regions.gameInfo = document.getElementById('gameInfo');
        this.regions.die1 = document.getElementById('die1');
        this.regions.die2 = document.getElementById('die2');
        this.regions.btn = document.getElementById('btn');
        this.regions.roundInfo = document.getElementById('roundInfo');

    },

    getStartTime: function() {
        var currentStartTime = new Date();
        var currentMonth = currentStartTime.getMonth() + 1;
        var currentDate = currentStartTime.getDate();
        var currentHour = currentStartTime.getHours();
        var currentMinute = currentStartTime.getMinutes();
        var currentSeconds = currentStartTime.getSeconds();
        var currentStartTimeString = 'Game started ' + currentMonth + '/' + currentDate + ' ' + currentHour + ':' + currentMinute + ':' + currentSeconds;

        this.values.gameInfo = currentStartTimeString;
        diceGame.regions.gameInfo.innerHTML = this.values.gameInfo;
        var gameStartLog = currentStartTime;
        this.values.gameInfo = gameStartLog;
    },

    rollDice: function() {
        //1. generate random number for each die
        var die1Amount = Math.floor(Math.random() * 6) + 1;
        var die2Amount = Math.floor(Math.random() * 6) + 1;
        //2. assign value to html element
        this.values.die1 = die1Amount;
        this.values.die2 = die2Amount;

        this.regions.die1.innerHTML = this.values.die1;
        this.regions.die2.innerHTML = this.values.die2;

        //3. call add roll to array and call gameStats function
        this.rolls.push("roll");
        this.gameStats();
    },

    gameStats: function() {
        var rollTotal = this.values.die1 + this.values.die2;

        if (rollTotal === 7 || rollTotal === 11) {
            //1. subtract current game start time from current time to get seconds elapsed

            var gameStartLog = this.values.gameInfo;
            var currentTime = new Date();
            var currentTimeMs = currentTime;

            var roundSeconds = (currentTimeMs - gameStartLog) / 1000;

            //2. get roll amount
            var rollAmount = (this.rolls.length);

            //3. print gameStats to html
            var roundInfo = "It took you " + rollAmount + " tries and " + roundSeconds + " seconds.";
            this.values.roundInfo = roundInfo;
            this.regions.roundInfo.innerHTML = this.values.roundInfo;

        } 

        }

    },

    init: function() {
        diceGame.defineRegions();
        diceGame.getStartTime();

        this.regions.btn.addEventListener('click', this.rollDice.bind(this));
    }
}

diceGame.init();
