function realtimeDynamic() {
  let date = new Date();
  let current_hr = date.getHours();
  let current_min = date.getMinutes();
  let current_sec = date.getSeconds();
  let current_no_of_day = date.getDate();
  let current_month = date.getMonth();
  let current_yr = date.getFullYear();
  let current_day = date.getDay();

  // ampm
  let ampm = current_hr >= 12 ? "PM" : "AM";

  // hour 1-12
  let use_hr;
  if (current_hr < 10) {
    let hr = current_hr;
    use_hr = "0" + hr;
  } else if (current_hr > 10 && current_hr <= 12) {
    use_hr = current_hr;
  } else if (current_hr > 12 && current_hr <= 23) {
    use_hr = current_hr - 12;
  } else {
    use_hr = "00";
  }

  // min 0-59
  let use_min =
    current_min <= 10 ? "0" + current_min : current_min;

  // sec 0-59
  let use_sec =
    current_sec < 10 ? "0" + current_sec : current_sec;

  // day 1-31
  let use_no_of_day =
    current_no_of_day < 10
      ? "0" + current_no_of_day
      : current_no_of_day;

  // month 0-11
  let no_ofMonth = current_month + 1;
  let use_month =
    no_ofMonth + 1 < 10 ? "0" + no_ofMonth : no_ofMonth;

  let monthName = [
    "January (31 days)",
    "February (28/29 days)",
    "March (31 days)",
    "April (30 days)",
    "May (31 days)",
    "June (30 days)",
    "July (31 days)",
    "August (31 days)",
    "September (30 days)",
    "ctober (31 days)",
    "November (30 days)",
    "December (31 days)",
  ];
  let use_monthName = monthName[current_month];

  // weekday 0-6
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let use_day = weekday[current_day];

  // overwrite hr:min:sec
  let timeDiv = document.querySelector(".hms");
  timeDiv.innerHTML = `<p>${use_hr} : ${use_min} : ${use_sec} <span >${ampm}</span></p>`;
  // overwrite date
  let dmy = document.querySelector(".dmy");
  dmy.innerHTML = `<p>${use_no_of_day}-${use_month} ${use_monthName}-${current_yr} <span>${use_day}</span></p>`;
}

setInterval(realtimeDynamic, 1000);
