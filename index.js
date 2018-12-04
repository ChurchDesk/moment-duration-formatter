

module.exports = function getFormattedDate(moment, startDate, endDate, allDay, hideEndTime, format = 'LLLL') {
  const singleDay = moment(startDate).isSame(endDate, 'day');
  // A full day event
  if (allDay) {
    const allDayFormat = format.substring(0,2);
    // The event spans multiple days
    if (!singleDay) {
      // Example: December 3, 2018 - December 4, 2018
      return `${moment(startDate).format(allDayFormat)} - ${moment(endDate).format(allDayFormat)}`;
    }
    // Example: Monday, December 3, 2018
    if (format.substring(0,1) === 'L') {
      return moment(startDate).format('dddd') + ', ' + moment(startDate).format(allDayFormat);
    } else if (format.substring(0,1) === 'l') {
      return moment(startDate).format('ddd') + ', ' + moment(startDate).format(allDayFormat);
    } else {
      return moment(startDate).format(allDayFormat);
    }
  }
  // Do not show end time of the event
  if (hideEndTime) {
    return moment(startDate).format(format);
  }
  // If it is a single day event, then show the date followed by time range
  if (singleDay) {
    let startDateText = moment(startDate).format(format).replace(' Uhr', '');
    return `${startDateText} - ${moment(endDate).format('LT')}`;
  }
  // If the event spans and is not full day event.
  return `${moment(startDate).format(format)} - ${moment(endDate).format(format)}`;
};
