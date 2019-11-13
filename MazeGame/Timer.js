class Timer {
    constructor() {
        this.startTimestamp = Math.floor(Date.now());
    }

    update() {
        this.delta = Math.floor(Date.now()) - this.startTimestamp;
        this.seconds = Math.floor(this.delta / 1000);
        if (this.seconds > 59) {
            this.minutes++;
        }
        if (this.minutes > 59) {
            this.hours++;
        }
    }

    show() {
        return `${
            this.hours ? this.hours : '00'
        }:${
            this.minutes ? this.minutes : '00'
        }:${
            this.seconds ? this.seconds : '00'
        }`;
    }

    finish() {
        this.endTime = this.delta;
    }
}