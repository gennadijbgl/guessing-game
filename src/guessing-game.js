class GuessingGame {

    constructor() {
        this._max = null;
        this._min = null;
        this._solution = null;
    }

    setRange(min, max) {
        this._max = max;
        this._min = min;
    }

    guess() {
        this._solution = Math.round((this._min+this._max)/2);

        return this._solution;
    }

    lower() {
        this._max = this._solution;
    }

    greater() {
        this._min = this._solution;
    }
}

module.exports = GuessingGame;
