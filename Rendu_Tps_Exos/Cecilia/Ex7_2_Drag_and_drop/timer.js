function Clock(heure, minute, seconde) {
    this.heure = heure;
    this.minute = minute;
    this.seconde = seconde;
    this.tick = function () {
        this.seconde++;
        if (this.seconde == 60) {
            this.seconde = 0;
            this.minute++;
            if (this.minute == 60) {
                this.minute = 0;
                this.heure++;
                if (this.heure == 24) {
                    this.heure = 0;
                }
            }
        }
    }

    this.display = function () {
        let seconde = (this.seconde < 10) ? "0" + this.seconde : this.seconde;
        let minute = (this.minute < 10) ? "0" + this.minute : this.minute;
        let heure = (this.heure < 10) ? "0" + this.heure : this.heure;
        let timer = document.getElementById('timer');
        timer.textContent = heure + ":" + minute + ":" + seconde;
    }
}

clock = new Clock(0, 0, 0);
clock.display();

function timerStart  (){
    setInterval(async function tick() {
        clock.display();
        clock.tick();
    }, 1000);
}
