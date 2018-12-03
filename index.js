import moment from 'moment';

export default function getFormattedDate(startDate, endDate, allDay) {
  const singleDay = return moment(startDate).isSame(endDate, 'day');
  // A full day event
  if (this.allDay) {
    // The event spans multiple days
    if (!singleDay) {
      return `${moment(this.startDate).format('LL')} - ${moment(this.endDate).format('LL')}`;
    }
    return moment(this.startDate).format('LL');
  }
  // Do not show end time of the event
  if (this.hideEndTime) {
    return moment(this.startDate).format('LLL');
  }
  // If it is a single day event, then show the date followed by time range
  if (singleDay) {
    return `${moment(this.startDate).format('LLL')} - ${moment(this.endDate).format('H:mm')}`;
  }
  // If the event spans and is not full day event.
  return `${moment(this.startDate).format('LLL')} - ${moment(this.endDate).format('LLL')}`;
};
