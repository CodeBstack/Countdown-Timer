"use strict";

class CountDown {
    constructor(expiredDate, onRender, onComplete) {
        this.setExpiredDate(expiredDate);
        this.onRender = onRender;
        this.onComplete = onComplete;
    }

    setExpiredDate(expiredDate) {
        //to get cur time
        const curTime = new Date().getTime();
        // console.log(curTime);

        // to calculate the remaining time
        this.timeRemaining = expiredDate - curTime;
        this.timeRemaining > 0 ?
            this.start() :
            this.complete();
    }

    complete() {
        if (typeof this.onComplete === 'function') {
            // console.log(typeof this.onComplete)
            onComplete();
        }
    }

    getTime() {
        return {
            days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
            hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
            minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
            seconds: Math.floor(this.timeRemaining / 1000) % 60,
        };
    }

    update() {
        if (typeof this.onRender === 'function') {
            this.onRender(this.getTime());
        }
    }

    start() {
        //update countdown
        this.update();

        //set up timer
        const intervalSet = setInterval(() => {
            //update timer
            this.timeRemaining -= 1000;

            if (this.timeRemaining <= 0) {
                //call the complete function
                complete();

                //also clear the interval to validate expire
                clearInterval(intervalSet);
            } else {
                this.update();
            }
        }, 1000)
    }
}



