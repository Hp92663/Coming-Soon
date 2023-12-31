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

        seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
        minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
        hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
        days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
    }, 1000);

    //   console.log(days, hours, minutes, seconds);