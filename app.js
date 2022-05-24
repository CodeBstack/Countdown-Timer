"use strict";



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

//which gets the Date
const launchDate = () => {
    const date = new Date('may 25, 2022 00:00:00').getTime();
    // console.log(date);
    return date;
}



//selection of elements
const countdownApp = document.querySelector('.countdown');
// const message = document.querySelector('.message');
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
// const reminder = ()=>{
//     if time.day
// }

const hideMessage = () => {
    title.innerHTML = 'THANK YOU 🙂🙂 '
}

const complete = () => {
    displayMessage();

    setTimeout(() => {
        hideMessage();
        countdownTimer.setExpiredDate(launchDate());
    }, 1000 * 30);
}

const countdownTimer = new CountDown(
    launchDate(),
    render,
    complete
)