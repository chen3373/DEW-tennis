class Match {
    date;
    players = [];
    winner = null;

    constructor(date = new Date()) {
        if (date instanceof Date) {
            this.date = date;
        } else {
            const [day, month, year] = date.split('/');
            this.date = new Date([year, month, day].join('/'));
        }
    }
    getDate() {
        const day = this.date.getDate().toString();
        const month = (this.date.getMonth() + 1).toString();
        const year = this.date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    addPlayer(player) {
        if (this.players.length >= 2) return false;

        this.players.push(player);
        return true;
    }

    getWinner(){
        return this.winner;
    }
    setWinner(player) {
        if (this.players.includes(player)) {
            if (this.date < (new Date())) {
                this.winner = player;
                return true;
            }
            return false;
        }
    }
}
module.exports = Match;