const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer1 = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('timer started');
    },
    onTick() {
        console.log('tick');
    },
    onComplete() {
        console.log('finished');
    }
});


