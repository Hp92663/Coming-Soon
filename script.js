const days = document.querySelector('.days .number');
      hours = document.querySelector('.hours .number');
      minutes = document.querySelector('.minutes .number');
      seconds = document.querySelector('.seconds .number');

let secValue = 44,
    minValue = 4,
    hourValue = 4,
    dayValue = 4;

    const timeFunction = setInterval(() => {
        secValue--;

        if (secValue < 0) {
            secValue = 59;
            minValue--;
        }
        if (minValue < 0) {
            minValue = 59;
            hourValue--;
        }
        if (hourValue < 0) {
            hourValue = 23;
            dayValue--;
        }
        if (dayValue < 0) {
            clearInterval(timeFunction);
        }

        console.log(secValue);
        seconds.textContent = secValue;
        minutes.textContent = minValue;
        hours.textContent = hourValue;
        days.textContent = dayValue;
    }, 1000);

    //   console.log(days, hours, minutes, seconds);