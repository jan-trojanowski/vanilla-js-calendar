(function () {
  'use strict';

  var date = new Date();
  var body = document.body;

  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  var shortDayName = dayNames.map(function (element) { return element.substring(0,3) });
  var monthsLength = {};

  var currentYear = date.getYear();
  var currentMonth = date.getMonth();
  var currentDay = date.getDate();

  var currentMonthName = monthNames[currentMonth];

  var getMonthLength = function (month, year) {
    var startDate = new Date(year, month, 1);
    var endDate = new Date(year, month + 1, 1);
    var diff = endDate - startDate;

    return Math.round(diff / (1000 * 24 * 60 * 60));
  };

  monthNames.forEach(function (element, index) {
    monthsLength[index] = getMonthLength(index, currentYear);

    // Alternative
    // monthsLength[element] = getMonthLength(index, currentYear);
  });

  var appendCalendar = function () {
    var calendar = document.createElement('div');
    calendar.classList.add('calendar');

    body.appendChild(calendar);

    monthNames.forEach(function (element, index) {
      var CURRENT = false;
      var month = document.createElement('div');
      var dayList = document.createElement('ul');
      var day;

      month.classList.add('month');
      month.innerHTML += element;

      calendar.appendChild(month);
      month.appendChild(dayList);

      if (index === currentMonth) {
        month.classList.add('current');
        CURRENT = true;
      }

      for (var i = 1; i < monthsLength[index] + 1; i++) {
        day = document.createElement('li');
        dayList.appendChild(day);
        day.innerHTML += i;

        if (i === currentDay && CURRENT) {
          day.classList.add('current');
        }
      }
    });
  };

  appendCalendar();
})();