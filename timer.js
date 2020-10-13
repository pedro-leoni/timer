class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }


        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        if (this.timeRemaining > 0) {
            console.log('start timer');
            this.interval = setInterval(this.tick, 1000);
        } else {
            console.log('stop timer');
            this.timeRemaining = 'Tiempo debe ser mayor a 0.';
        }
    };

    pause = () => {
        if (this.onComplete) {
            this.onComplete();
        }
        clearInterval(this.interval);
    };

    onDurationChange = () => {

    };

    tick = () => {
        if (this.timeRemaining > 0) {
            if (this.onTick) {
                this.onTick();
            }
            this.timeRemaining  = this.timeRemaining - 1;
        } else {
            this.pause();
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}