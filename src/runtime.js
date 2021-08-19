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
  new TxtType(element, ["Mehedi Hasan", "Meha"], 2000, 3);
};
