class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }

  get timeDifference() {
    return this.targetDate - Date.now();
  }

  get days() {
    return this.pad(Math.floor(this.timeDifference / (1000 * 60 * 60 * 24)));
  }

  get hours() {
    return this.pad(
      Math.floor(
        (this.timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
    );
  }

  get mins() {
    return this.pad(
      Math.floor((this.timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    );
  }

  get secs() {
    return this.pad(Math.floor((this.timeDifference % (1000 * 60)) / 1000));
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  count() {
    setInterval(() => {
      document.querySelector(
        `${this.selector} [data-value="days"]`
      ).textContent = this.days;
      document.querySelector(
        `${this.selector} [data-value="hours"]`
      ).textContent = this.hours;
      document.querySelector(
        `${this.selector} [data-value="mins"]`
      ).textContent = this.mins;
      document.querySelector(
        `${this.selector} [data-value="secs"]`
      ).textContent = this.secs;
    }, 1000);
  }
}

const blackFridayTimer = new CountdownTimer("#timer-1", "Nov 26, 2021");

blackFridayTimer.count();
