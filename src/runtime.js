import dayjs from 'dayjs';

import "./style.css";

var TxtType = function (el, toRotate, period, cutOffIndex) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = period;
  this.txt = "Mehedi Hasan";
  this.cutOffIndex = cutOffIndex;
  this.tick(true);
  this.isDeleting = true;
};

TxtType.prototype.tick = function (firstRun = false) {
  var index = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[index];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = firstRun ? 1000 : this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt.length === this.cutOffIndex) {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  console.log(delta);

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  const element = document.querySelector("#first-name");
  // new TxtType(element, ["Mehedi Hasan", "Meha"], 2000, 3);

  document.getElementsByClassName('cryptedmail')[0].outerHTML = '<a class="subtext" href="mailto:mehamasum@gmail.com" title="Send Email">mehamasum@gmail.com</a>';
  document.getElementsByClassName('cryptedtel')[0].outerHTML = '<a class="subtext" href="tel:+8801521112085" title="Phone">+880 152 111 2085</a>';

  const modeSwitch = document.querySelector('.mode-switch');
  modeSwitch.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    document.querySelector('.mode-switch-icon').classList.toggle('fa-sun');
  });

  document.querySelectorAll('.tenure').forEach(function (el) {
    const work = {
      startDate: el.dataset.start,
      endDate: el.dataset.end,
    }

    const startDate = dayjs(work.startDate, 'YYYY-MM-DD');
    const endDate = work.endDate ? dayjs(work.endDate, 'YYYY-MM-DD') : dayjs();
    const formattedStartDate = startDate.format('MMM YYYY');
    const formattedEndDate = endDate.format('MMM YYYY');
    const tenureStr = work.endDate ? `${formattedStartDate} to ${formattedEndDate}` : `Since ${formattedStartDate}`;

    const diffInMonths = Math.ceil(endDate.diff(startDate, 'month', true));
    const diffInYears = Math.floor(endDate.diff(startDate, 'year', true));
    const durationStr = diffInYears > 0 ? `${diffInYears} year${diffInYears === 1 ? '' : 's'}, ${(diffInMonths % 12)} month${diffInMonths % 12 === 1 ? '' : 's'}` : `${diffInMonths} month${diffInMonths === 1 ? '' : 's'}`

    el.innerHTML = `${tenureStr} (${durationStr})`;
  });
};
