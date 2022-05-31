"use strict";


// //Selection of modal elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelector('.btn--show-modal');
const form = document.querySelector('.form');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.getElementById('year-select').focus();
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// // Function which gets the Date - hardcoded
// const launchDate = (year, month, day) => {
//   const date = new Date(`may 31, 2022 00:00:00`);
//   date.setFullYear(2022)
//   date.setMonth(4)
//   date.setDate(31)
//   date.setHours(9)
//   date.setMinutes(6)
//   date.setSeconds(0)
//   console.log(date, typeof date);
//   return date;
// }

//Selection of the input elements
const year = +document.getElementById('year-select').value;
const month = +document.getElementById('month-select').value;
const day = +document.getElementById('day-select').value;
// const eventName = document.getElementById('event-name').textContent;


const launchDate = (year, month, day) => {
  const date = new Date();
  date.setFullYear(year)
  date.setMonth(month)
  date.setDate(day)
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  console.log(year, month, day, date, typeof date);
  return date;
}

//selection of elements
const countdownApp = document.querySelector('.countdown');
const title = document.querySelector('.title');

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
  title.innerHTML = `Your long waited event is finally here 😊😊`
  title.style.color = 'hsl(0, 0%, 100%)'
  title.style.fontSize = '30px'
  title.style.marginLeft = '20px'
}

const hideMessage = () => {
  title.innerHTML = 'THANK YOU 🙂🙂'
}

const complete = () => {
  displayMessage();

  setTimeout(() => {
    hideMessage();
    // countdownTimer.setExpiredDate(launchDate(year, month, day))
  }, 1000 * 10);
}

//Event listener added to the Enter button on the form.
form.addEventListener('submit', function (e) {
  const year = +document.getElementById('year-select').value;
  const month = +document.getElementById('month-select').value;
  const day = +document.getElementById('day-select').value;

  e.preventDefault();

  closeModal();

  const countdownTimer = new CountDown(
    launchDate(year, month, day),
    render,
    complete
  )
});