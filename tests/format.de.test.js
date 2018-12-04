const momentDurationFormatter = require('../dist/index');
const moment = require('moment');
const expect = require('unexpected');

moment.locale('de');

it('Event spanning 1 hour', () => {
  const start = moment('2013-01-01T14:00:00');
  const end = moment('2013-01-01T15:00:00');
  const allDay = false;
  const hideEndTime = false;
  const output = momentDurationFormatter(moment, start, end, allDay, hideEndTime);
  expect(output, 'to be', 'Dienstag, 1. Januar 2013, 14:00 - 15:00 Uhr');
});

it('Event with no end time', () => {
  const start = moment('2013-01-01T14:00:00');
  const end = moment('2013-01-01T15:00:00');
  const allDay = false;
  const hideEndTime = true;
  const output = momentDurationFormatter(moment, start, end, allDay, hideEndTime);
  expect(output, 'to be', 'Dienstag, 1. Januar 2013, 14:00 Uhr');
});

it('Spans more than one day', () => {
  const start = moment('2013-01-01T14:00:00');
  const end = moment('2013-03-01T15:00:00');
  const allDay = false;
  const hideEndTime = false;
  const output = momentDurationFormatter(moment, start, end, allDay, hideEndTime);
  expect(output, 'to be', 'Dienstag, 1. Januar 2013, 14:00 Uhr - Freitag, 1. März 2013, 15:00 Uhr');
});

it('Full day', () => {
  const start = moment('2017-01-01T23:00:00Z');
  const end = moment('2017-01-02T22:59:59Z');
  const allDay = true;
  const hideEndTime = false;
  const output = momentDurationFormatter(moment, start, end, allDay, hideEndTime);
  expect(output, 'to be', 'Montag, 2. Januar 2017');
});

it('Spanning multiple full days', () => {
  const start = moment('2017-01-01T23:00:00Z');
  const end = moment('2017-01-04T22:59:59Z');
  const allDay = true;
  const hideEndTime = false;
  const output = momentDurationFormatter(moment, start, end, allDay, hideEndTime);
  expect(output, 'to be', '2. Januar 2017 - 4. Januar 2017');
});