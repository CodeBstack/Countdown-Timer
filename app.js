"use strict";


//Selection of modal elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener
    ('click', openModal);



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// //which gets the Date - hardcoded
// const launchDate = () => {
//     const date = new Date('may 25, 2022 00:00:00').getTime();
//Using this Date format -- console.log(new Date(2037, 10, 31)) //Tue Dec 01 2037 00:00:00 GMT+0100 (West Africa Standard Time)

//     // console.log(date);
//     return date;
// }

//Selection of the input elements
const year = Number(document.getElementById('year-select').value);
const month = Number(document.getElementById('month-select').value);
const day = Number(document.getElementById('day-select').value);
// const eventName = document.getElementById('event-name').textContent;

console.log(year, month, day)





// const launchDate = (year, month, day) => {
//     const date = new Date(year, month, day).getTime();
//     console.log(year, month, day, date);
//     return date;
// }


//function which does the countdown and also renders the html
const countDownFunc = function () {
    //selection of elements
    const countdownApp = document.querySelector('.countdown');

    const title = document.querySelector('h2');
    const timers = document.querySelector('.timers')

    const dateFormat = (t) => {
        return t < 10 ? '0' + t : t;
    }

    const render = (time) => {
        countdownApp.innerHTML = `
    <div class="comp-container">
    <div class="day components">
      <p class="timers">${dateFormat(time.days)}</p>
    </div>
    <div class="components-label">
      <p>days</p>
    </div>
  </div>

  <div class="comp-container">
    <div class="hour components">
          <p class="timers">${dateFormat(time.hours)}</p>
     </div>
    <div class="components-label">
          <p>hours</p>
    </div>
    </div>

      <div class="comp-container">
        <div class="minute components">
          <p class="timers">${dateFormat(time.minutes)}</p>
        </div>
        <div class="components-label">
          <p>minutes</p>
        </div>
      </div>

      <div class="comp-container">
        <div class="second components">
          <p class="timers">${dateFormat(time.seconds)}</p>
        </div>
        <div class="components-label">
          <p>seconds</p>
        </div>
      </div> `
    }

    const displayMessage = () => {
        title.innerHTML = 'EXPIRED!!!'
        // timers.innerHTML = '';
        // title.style.display = 'none';
    }

    const hideMessage = () => {
        title.innerHTML = 'THANK YOU 🙂🙂 '
    }

    const complete = () => {
        displayMessage();

        setTimeout(() => {
            hideMessage();
            countdownTimer.setExpiredDate(launchDate(year, month, day));
        }, 1000 * 30);
    }

    const countdownTimer = new CountDown(
        launchDate(year, month, day),
        render,
        complete
    )
}
// countDownFunc();


//Event listener added to the Enter button on the form.
document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault();



    closeModal();


    // countDownFunc();
});