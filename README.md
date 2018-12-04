# moment-duration-formatter
Helps format dates for events etc.

## Install

```
yarn add https://github.com/ChurchDesk/moment-duration-formatter#X.X.X
```

## Usage

```
  const momentDurationFormatter = require('moment-duration-formatter');
  momentDurationFormatter(moment, start, end, allDay, hideEndTime);
```

OR

```
  import momentDurationFormatter from 'moment-duration-formatter';
  momentDurationFormatter(moment, start, end, allDay, hideEndTime);
```


## Example

```
  const start = moment('2013-01-01T14:00:00');
  const end = moment('2013-03-01T15:00:00');
  const allDay = false;
  const hideEndTime = false;
  const output = momentDurationFormatter(moment, start, end, allDay, hideEndTime);
  console.log(output); // 'Dienstag, 1. Januar 2013, 14:00 Uhr - Freitag, 1. März 2013, 15:00 Uhr'
```