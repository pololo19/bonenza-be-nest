import * as moment from 'moment';

export function contestTime() {
  const startTime = moment().utcOffset(0);
  const currentTime = moment().utcOffset(0);
  const endTime = moment().utcOffset(0);
  const lastStartTime = moment().utcOffset(0);
  const lastEndTime = moment().utcOffset(0);

  // Set the time to 02:00:00
  startTime.set({ hour: 2, minute: 0, second: 0, millisecond: 0 });
  endTime.set({ hour: 2, minute: 0, second: 0, millisecond: 0 });
  lastStartTime.set({ hour: 2, minute: 0, second: 0, millisecond: 0 });
  lastStartTime.subtract(1, 'days');
  lastEndTime.set({ hour: 2, minute: 0, second: 0, millisecond: 0 });

  const unixCurrentTime = currentTime.unix();

  if (unixCurrentTime < startTime.unix()) {
    startTime.subtract(1, 'days');
  }

  if (unixCurrentTime >= endTime.unix()) {
    endTime.add(1, 'days');
  } else {
    lastStartTime.subtract(1, 'days');
    lastEndTime.subtract(1, 'days');
  }

  return {
    startTime: startTime.unix(),
    currentTime: currentTime.unix(),
    endTime: endTime.unix(),
    lastStartTime: lastStartTime.unix(),
    lastEndTime: lastEndTime.unix(),
  };
}
