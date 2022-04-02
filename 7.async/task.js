class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if (id === undefined) throw new Error('error text');
        if (this.alarmCollection.some(values => values.id === id)) {
            return console.error("Ошибка")
        };

        return this.alarmCollection.push({ id, time, callback });

    }

    removeClock(id) {
        let a = this.alarmCollection.length;

        this.alarmCollection = this.alarmCollection.filter(values => values.id !== id);
        let c = this.alarmCollection.length;
        return a > c
    }

    getCurrentFormattedTime() {

        let nowTime = new Date;
        let hours = nowTime.getHours();
        let minutes = nowTime.getMinutes();

        if (hours < 10) {
            hours = "0" + hours
        };
        if (minutes < 10) {
            minutes = "0" + minutes
        };


        return `${hours}:${minutes}`
    }

    start() {
        function checkClock() {

            if (this.timerId === null) {
                this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)),)
            }
        }
    }

    stop() {
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            return this.timerId = null
        }
    }

    printAlarms() {
        return this.alarmCollection.forEach((item) => item.id + ":" + item.time)
    }


    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }

} 